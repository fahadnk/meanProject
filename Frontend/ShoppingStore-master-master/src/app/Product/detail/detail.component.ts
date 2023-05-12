import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ConfigService} from '../../config/config.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  detail: any;
  ID: any;

  constructor(private apiDetail:ConfigService, private route:ActivatedRoute){
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      console.log( 'too check params',params);
      this.apiDetail.getProductData(params['pid']).subscribe((res :any )=>{
        this.detail=res;
        console.log( 'too check res',this.detail);
      });
    }
      )
  }
  
}
