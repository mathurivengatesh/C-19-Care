import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
  add(formobject:any){
    // console.log("abdc");
    return this.http.post("http://localhost:8000/signup",formobject)

  }
  getsupplier(){
    return this.http.get('http://localhost:8000/getsupplier/');
  }
  getsupplierId(id:any){
    return this.http.get(`http://localhost:8000/getId/${id}`);
  }
}
