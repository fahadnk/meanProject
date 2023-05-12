import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ConfigService} from '../../config/config.service';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { DetailComponent } from '../detail/detail.component';
import { DialogueboxComponent } from '../dialoguebox/dialoguebox.component';
import { HttpCallServiceService } from 'src/app/HttpCallService/http-call-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent  {

  constructor(private httpCallService:HttpCallServiceService, private route :Router, private dialog :MatDialog){
  }
  product: any;
  ngOnInit(){
    this.httpCallService.getProducts().subscribe((res :any )=>{
      if(res){
        console.log('this is res')
        this.product=res;
      }
    });
  }
  // openDetail(id:any){
    
  // }
  openDialogDetail(id:any) {
    this.route.navigate(['my-product/detail'],{queryParams:{pid:id}});
    // const dialogRef = this.dialog.open(DetailComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string , ID : any): void {
    this.dialog.open(DialogueboxComponent,{
      width: '1250px',
      height : '500px',
      data: ID,
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
