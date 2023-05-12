import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './LoginComponents/notfound/notfound.component';


const routes: Routes = [
  {
    path: 'my-login',
     loadChildren: () => import('../app/LoginComponents/my-login/my-login.module').then(m => m.MyLoginModule)
  },
  {
    path: 'my-product',
    loadChildren: () => import('../app/Product/my-prouct/my-prouct.module').then(m => m.MyProuctModule)
  },

  {path: '', redirectTo :'/my-login', pathMatch:'full'},
  {path: '**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
