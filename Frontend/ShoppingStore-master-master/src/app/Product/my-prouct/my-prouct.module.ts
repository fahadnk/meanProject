import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../Product/header/header.component';
import { FooterComponent } from '../../Product/footer/footer.component';
import { DetailComponent } from '../../Product/detail/detail.component';
import { ProductsComponent} from '../../Product/products/products.component';
import { MyProuctRoutingModule } from './my-prouct-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogueboxComponent } from '../dialoguebox/dialoguebox.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    DetailComponent,
    DialogueboxComponent
  ],
  imports: [
    CommonModule,
    MyProuctRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule

  ]
})
export class MyProuctModule { }
