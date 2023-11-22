import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent  {
  constructor(private router: Router){

  }
  routeBackToHome(){
    this.router.navigate(['my-product']);
  }
  routeToContact(){
    this.router.navigateByUrl('/my-product/contact');
  }
}
