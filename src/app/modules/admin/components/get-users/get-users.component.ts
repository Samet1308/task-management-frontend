import { Component } from '@angular/core';
import { AdminService } from "../../services/admin.service";
import {MatCard} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {RouterLink} from "@angular/router";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzTooltipDirective} from "ng-zorro-antd/tooltip";
import {DatePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css'],
  standalone: true,
  imports: [
    MatCard,
    MatDivider,
    RouterLink,
    NzButtonComponent,
    NzIconDirective,
    NzTooltipDirective,
    DatePipe,
    NgForOf,
    NgIf
  ],
  // Bu, bileşenin standalone olduğunu belirtir
})
export class GetUsersComponent {
  listOfUsers: any = [];
  selectedUserTasks: any[] = [];

  selectedUserName: string = '';

  constructor(
    private adminService: AdminService,
  ) {
    this.getUsers();
  }

  getUsers() {
    this.adminService.getUsers().subscribe((res) => {
      this.listOfUsers = res;
    });
  }

  onUserClick(userId: number) {
    this.adminService.getTasksByUserId(userId).subscribe((tasks) => {
      this.selectedUserTasks = tasks;
      const selectedUser = this.listOfUsers.find((user: any) => user.id === userId);
      this.selectedUserName = selectedUser ? selectedUser.name : '';
    });
  }

  deleteTask(taskId: number) {
    this.adminService.deleteTask(taskId).subscribe(() => {
      this.selectedUserTasks = this.selectedUserTasks.filter(task => task.id !== taskId);
    });
  }
}
