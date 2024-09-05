import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../admin/services/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-view-task-details',
  templateUrl: './view-task-details.component.html',
  styleUrl: './view-task-details.component.css'
})
export class ViewTaskDetailsComponent {

  taskId: number = this.activatedRoute.snapshot.params["id"]
  taskData: any = {}
  comments: any = []
  commentForm! : FormGroup

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private formBuilder : FormBuilder,
    private message : NzMessageService,
    private router : Router
  ) {}

  ngOnInit(){
    this.getTaskById()
    this.getCommentsById()
    this.commentForm = this.formBuilder.group({
      content: [null , Validators.required]
    })
  }

  getTaskById(){
    this.employeeService.getTaskById(this.taskId).subscribe((res) => {
      this.taskData = res
    })
  }

  getCommentsById(){
    this.employeeService.getCommentsById(this.taskId).subscribe((res) => {
      this.comments = res
    })
  }


  publishComment(){
    this.employeeService.createComment(this.taskId, this.commentForm.get("content")?.value).subscribe((res)=> {
      if (res.id != null) {
        this.message
          .success(
            `Yorum Başarıyla Eklendi.`, {nzDuration: 5000}
          );
        this.getCommentsById()
      } else {
        this.message.error(
          `Something went wrong`, {nzDuration: 5000})
      }
    })
  }

}
