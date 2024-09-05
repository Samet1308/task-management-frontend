import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {NzMessageService} from "ng-zorro-antd/message";
import { Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  isSpinning?: boolean;
  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
  private authService: AuthService,
  private message: NzMessageService,
  private router: Router) {}

  ngOnInit(){
    this.signupForm = this.formBuilder.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required, Validators.email]],
      password:[null,[Validators.required]],
      checkPassword:[null,[Validators.required],[this.confirmationValidate]]
    })
  }

  register(){
    console.log(this.signupForm.value)
    this.authService.signup(this.signupForm.value).subscribe((res) =>{
      console.log(res)
      if(res.id != null){
        this.message.success("Kayıt Başarılı", {nzDuration:5000})
        this.router.navigateByUrl("/login")
      }
      else{
        this.message.error("Kayıt Başarısız.Tekrar Deneyiniz.", {nzDuration:5000})
      }

    })
  }

  confirmationValidate = (control: FormControl): Promise<{ [s: string]: boolean } | null> => {
    return new Promise((resolve) => {
      if (!control.value) {
        resolve({ required: true });
      } else if (control.value !== this.signupForm.controls['password'].value) {
        resolve({ confirm: true, error: true });
      } else {
        resolve(null); // Doğrulama hatası yok
      }
    });
  }
}
