import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConfigService} from './config/config.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MyProuctModule} from './Product/my-prouct/my-prouct.module';
import {LoginService } from './login.service';
import {MyLoginModule} from '../app/LoginComponents/my-login/my-login.module';
import { HttpCallServiceService } from './HttpCallService/http-call-service.service';
import { HttpInterceptorService } from './http-interceptor.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MyProuctModule,
    MyLoginModule
  ],
  providers: [
    ConfigService,
    LoginService,
    HttpCallServiceService,
    [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
