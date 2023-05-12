import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email:any, passsword:any){
    return this.http.post('https://dummyjson.com/auth/login',JSON.stringify({
      username:email,
      passsword:passsword
    }))
  }
}
