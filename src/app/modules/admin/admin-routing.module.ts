import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {PostTaskComponent} from "./components/post-task/post-task.component";
import {UpdateTaskComponent} from "./components/update-task/update-task.component";
import {ViewTaskDetailsComponent} from "./components/view-task-details/view-task-details.component";
import {GetUsersComponent} from "./components/get-users/get-users.component";

const routes: Routes = [
  {path: "dashboard", component:AdminDashboardComponent},
  {path: "task", component:PostTaskComponent},
  {path: "task/:id/edit", component:UpdateTaskComponent},
  {path: "task-details/:id", component:ViewTaskDetailsComponent},
  {path: "personal", component:GetUsersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
