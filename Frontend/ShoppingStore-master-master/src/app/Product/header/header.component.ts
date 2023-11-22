import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/loginService/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  options: string[] = ['One', 'Two', 'Three'];
  constructor(private router: Router, private login :AuthService){
  }
  
  ngOnInit(): void {}
  logout(): void {
    this.login.logOut();
    this.router.navigate(['my-login']);
  }

}
