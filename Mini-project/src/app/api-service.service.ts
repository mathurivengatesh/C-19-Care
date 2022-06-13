import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
  add(formobject:any){
    return this.http.post("http://localhost:8000/signup",formobject)

  }
  getData(){
    return this.http.get('http://localhost:8000/getData/');
  }
  getDataId(id:any){
    return this.http.get(`http://localhost:8000/getId/${id}`);
  }
}
