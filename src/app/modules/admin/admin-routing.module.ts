import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {PostTaskComponent} from "./components/post-task/post-task.component";

const routes: Routes = [
  {path: "admin-dash", component:AdminDashboardComponent},
  {path: "task", component:PostTaskComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
