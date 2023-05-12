import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCallServiceService {
  productsListUrl= "http://localhost:4000/api/products/";
  userLoginUrl= "http://localhost:4000/api/user/login/";
  userResgisterUrl = "http://localhost:4000/api/user/register/";

  constructor(private http: HttpClient) { }

  login(emailVal: any, pwdVal: any): Observable<any>{
    const payload = {
      email:emailVal,
      pwd:pwdVal
    }
    return this.http.post<any>(this.userLoginUrl, payload);
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.productsListUrl);
  }

  // updateProducts(): Observable<any> {
  //   return this.http.get<any>(this.productsListUrl);
  // }

  registerUser(data: any): Observable<any> {
    const payload = data;
    return this.http.post<any>(this.userResgisterUrl, payload);
  }

  
}
