import { Component } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  listOfTasks: any = []
  searchForm!: FormGroup;

  constructor(
    private adminService : AdminService,
    private message: NzMessageService,
    private formBuilder: FormBuilder
  ) {

    this.searchForm = this.formBuilder.group({
      title:[null],
      employeeName: [null]
    })
    this.getTasks()
  }
  ngOnInit(): void {
    this.getTasks(); // Tüm görevleri başlangıçta yükle
    this.onSearchInputChanges(); // Arama alanındaki değişiklikleri dinle
  }



  getTasks(){
    this.adminService.getAllTasks().subscribe((res)=>{
      this.listOfTasks = res
    })
  }

  deleteTask(id:number){
    this.adminService.deleteTask(id).subscribe((res)=>{
      this.message
        .success(
          `Görev Başarıyla Silindi.`, {nzDuration: 5000}
        );
      this.getTasks()
    })
  }

  searchTask(){
    this.listOfTasks = []
    const title = this.searchForm.get("title")!.value
    const employeeName = this.searchForm.get("employeeName")!.value;
    console.log(title)
    this.adminService.searchTask(title, employeeName).subscribe((res)=>{
      console.log(res)
      this.listOfTasks = res
    })
  }

  onSearchInputChanges() {
    this.searchForm.get('title')?.valueChanges.subscribe(value => {
      if (!value) {
        this.getTasks(); // Arama kutusu temizlenirse tüm görevleri yükle
      }
    });
  }
}
