import { Component } from '@angular/core';
import {NzMessageService} from "ng-zorro-antd/message";
import {EmployeeService} from "../../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  taskId: number = this.activatedRoute.snapshot.params["id"]
  listOfTasks: any = []
  taskData: any = {}
  constructor(
    private employeeService : EmployeeService,
    private message: NzMessageService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.getTasks()
  }

  getTasks(){
    this.employeeService.getEmployeeTaskById().subscribe((res)=>{
      console.log(res)
      this.listOfTasks = res
    })
  }

  getTaskById(){
    this.employeeService.getTaskById(this.taskId).subscribe((res) => {
      this.taskData = res
    })
  }
  updateStatus(id:number , status:string){
      this.employeeService.updateStatus(id,status).subscribe((res) =>{
        if (res.id != null) {
          this.message
            .success(
              `Görev Durumu Başarıyla Güncellendi.`, {nzDuration: 5000}
            );
          this.getTasks()
        } else {
          this.message.error(
            `Something went wrong`, {nzDuration: 5000})
        }
      })
  }

}
