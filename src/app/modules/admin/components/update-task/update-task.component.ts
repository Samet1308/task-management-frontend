import { Component } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent {
  id: number = this.route.snapshot.params["id"];
  updateTaskForm! : FormGroup
  listOfEmployees: any = []
  listOfPriorities : any = ["DÜŞÜK" , "ORTA" , "YÜKSEK"]
  listOfTaskStatus : any = ["BEKLEMEDE", "YAPILIYOR", "TAMAMLANDI", "ERTELENDİ", "İPTAL EDİLDİ"]

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private message : NzMessageService,
    private router : Router

  ) {
    this.getTaskById()
    this.getUsers()
    this.updateTaskForm = this.formBuilder.group({
      employeeId: [null, [Validators.required]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      dueDate: [null, [Validators.required]],
      priority: [null, [Validators.required]],
      taskStatus: [null, [Validators.required]],

    })

  }

  getTaskById(){
   this.adminService.getTaskById(this.id).subscribe((res)=>{
     this.updateTaskForm.patchValue({
       title: res.title,
       description: res.description,
       dueDate: res.dueDate,
       priority: res.priority,
       taskStatus: res.taskStatus,
       employeeId: res.employeeId
     })
     console.log(res)
   })
  }
  getUsers() {
    this.adminService.getUsers().subscribe((res) => {
      this.listOfEmployees = res
      console.log(res);
    })
  }

  updateTask(){
    console.log(this.updateTaskForm.value)
    this.adminService.updateTask(this.id, this.updateTaskForm.value).subscribe((res) =>{

      if (res.id != null) {
        this.message
          .success(
            `Görev Başarıyla Güncellendi.`, {nzDuration: 5000}
          );
        this.router.navigateByUrl('/admin/dashboard');
      } else {
        this.message.error(
          `Something went wrong`, {nzDuration: 5000})
      }
    })
  }
}
