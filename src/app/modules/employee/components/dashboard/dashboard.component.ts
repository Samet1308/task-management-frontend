import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  listOfTasks: any = []
  searchForm!: FormGroup;
  constructor(
    private employeeService : EmployeeService,
    private message: NzMessageService,
    private router : Router
  ) {
    this.getTasks()
  }

  getTasks(){
    this.employeeService.getEmployeeTaskById().subscribe((res)=>{
      console.log(res)
      this.listOfTasks = res
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
