import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HttpCallServiceService } from 'src/app/HttpCallService/http-call-service.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  faLock = faCoffee;
  signUpForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirm_password:new FormControl(''),
  });

  constructor(private router: Router, private resgisterUser :HttpCallServiceService){
  };

  onSubmit(): void {
    if (this.signUpForm.valid) {

      const data = {
        userName:this.signUpForm.controls['username'].value,
        email:this.signUpForm.controls['email'].value,
        pwd:this.signUpForm.controls['password'].value

      };
      this.resgisterUser.registerUser(data).subscribe(res => {
        if(res){
          this.router.navigate(['']);
        }
      }, err =>{
        console.log(err.error.message);
      });
    }
  }

}
