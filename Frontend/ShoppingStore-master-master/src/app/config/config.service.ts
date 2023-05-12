import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }
  getData(){
  return this.http.get('https://dummyjson.com/products');
  }
  getProductData(ID: any){
   return this.http.get('https://dummyjson.com/products/'+ ID);
  }

}
