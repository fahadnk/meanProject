import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { LoginService} from '../../login.service'
import { AuthService } from 'src/app/loginService/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
faLock = faCoffee;
loginForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
});

constructor(private router: Router, private login :AuthService){
}

ngOnInit(): void {
  // if (this.auth.isLoggedIn()) {
  //   this.router.navigate(['admin']);
  // }
}

onSubmit(): void {
  if (this.loginForm.valid) {
    this.login.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value).subscribe(res => {
      if(res){
        this.router.navigate(['my-product']);
      }
    }, err =>{
      console.log(err.error.message);
    });
  }
}
 }
