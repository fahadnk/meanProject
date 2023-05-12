import { Component, Inject } from '@angular/core';
import {ConfigService} from '../../config/config.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialoguebox',
  templateUrl: './dialoguebox.component.html',
  styleUrls: ['./dialoguebox.component.scss']
})
export class DialogueboxComponent {

  detailD : any
  constructor(private apiDetail:ConfigService, public dialogRef: MatDialogRef<DialogueboxComponent>, private route:ActivatedRoute,
  @Inject(MAT_DIALOG_DATA) public data:string){
    
  }

  ngOnInit(){
      this.apiDetail.getProductData(this.data).subscribe((res :any )=>{
        this.detailD=res;
      });
    }
      
  }

