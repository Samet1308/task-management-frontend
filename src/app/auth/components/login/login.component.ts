import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";
import {AuthService} from "../../services/auth/auth.service";
import {StorageService} from "../../services/storage/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSpinning: boolean = false
  loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router:Router,
              private message: NzMessageService) {
  }

  ngOnInit(){
    this.loginForm = this.formBuilder.group(
      {
        email:[null, [Validators.email, Validators.required]],
        password: [null, [Validators.required]]
      }
    )
  }
  // submitForm(){
  //   this.authService.login(this.loginForm.value).subscribe((res) => {
  //     console.log(this.loginForm.value)
  //   })
  // }

  login(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((res)=> {
      console.log(res);
      if(res.userId != null){
        const  user ={
          id: res.userId,
          role:res.userRole
        }
        StorageService.saveToken(res.jwt)
        StorageService.saveUser(user)
        if(StorageService.isAdminLoggedIn()){
          this.router.navigateByUrl("admin/admin-dash")
        }else if(StorageService.isEmployeeLoggedIn()){
          this.router.navigateByUrl("employee/dashboard")
        }else{
          this.message.error("Yanlış Kimlik", {nzDuration: 50000})
        }
      }
    })
  }
}
