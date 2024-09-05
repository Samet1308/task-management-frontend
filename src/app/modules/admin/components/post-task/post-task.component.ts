import { Component } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-task',
  templateUrl: './post-task.component.html',
  styleUrl: './post-task.component.css'
})
export class PostTaskComponent {

  taskForm : FormGroup
  listOfEmployees: any = []
  listOfPriorities : any = ["DÜŞÜK" , "ORTA" , "YÜKSEK"]
  searchForm!: FormGroup;
  errorTip: string = ''

  constructor(private adminService: AdminService,
  private formBuilder : FormBuilder,
  private message: NzMessageService,
  private router: Router) {
    this.searchForm = this.formBuilder.group({
      dueDate: [null, Validators.required]
    });
    this.getUsers()
    this.taskForm = this.formBuilder.group({
      employeeId: [null, [Validators.required]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      dueDate: [null, [Validators.required]],
      priority: [null, [Validators.required]],
    })
  }

  ngOnInit(): void {
    // Tarih seçici değeri değiştiğinde kontrol yap
    this.searchForm.get('dueDate')?.valueChanges.subscribe(selectedDate => {
      this.validateDate(selectedDate);
    });
  }

  validateDate(selectedDate: Date | null): void {
    if (selectedDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Bugünün tarihini saat bilgisiz şekilde ayarlayın

      if (selectedDate < today) {
        this.errorTip = 'Bitiş tarihi bugünün tarihinden önce olamaz.';
        this.searchForm.get('dueDate')?.setErrors({ invalidDate: true });
      } else {
        this.errorTip = ''; // Hata mesajını temizle
        this.searchForm.get('dueDate')?.updateValueAndValidity(); // Formun geçerliliğini güncelle
      }
    }
  }
  getUsers() {
    this.adminService.getUsers().subscribe((res) => {
      this.listOfEmployees = res
      console.log(res);
    })
  }
  postTask(){
    console.log(this.taskForm.value)
    this.adminService.postTask(this.taskForm.value).subscribe((res) =>{

      if (res.id != null) {
        this.message
          .success(
            `Görev Başarıyla Oluşturuldu.`, {nzDuration: 5000}
          );
        this.router.navigateByUrl('/admin/dashboard');
      } else {
        this.message.error(
          `Something went wrong`, {nzDuration: 5000})
      }
    })
  }
}
