import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./auth/components/signup/signup.component";
import {LoginComponent} from "./auth/components/login/login.component";

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"signup", component: SignupComponent},
  {path:"login", component: LoginComponent},
  {path: "admin", loadChildren:() => import("./modules/admin/admin.module").then(m=>m.AdminModule)},
  {path: "employee", loadChildren:() => import("./modules/employee/employee.module").then(m=>m.EmployeeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
