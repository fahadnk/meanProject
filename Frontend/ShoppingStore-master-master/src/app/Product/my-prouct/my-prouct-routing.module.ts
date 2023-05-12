import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../../Product/products/products.component';
import { DetailComponent } from '../../Product/detail/detail.component';

const routes: Routes = [
  {path: '', component:ProductsComponent},
  {path: 'detail', component:DetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProuctRoutingModule { }
