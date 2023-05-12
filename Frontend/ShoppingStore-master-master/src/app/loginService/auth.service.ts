import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpCallServiceService } from '../HttpCallService/http-call-service.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private httpService: HttpCallServiceService) { }

  login(email: any, password: any)
  {
    return this.httpService.login(email, password).pipe(
      tap((res:any)=>{
        localStorage.setItem("TOKEN", res.token);
      }
    )
  )
  }

  logOut()
  { 
    localStorage.removeItem("TOKEN");
  }
}
