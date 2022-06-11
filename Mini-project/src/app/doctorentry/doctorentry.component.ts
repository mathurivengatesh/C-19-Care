import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CouchdbService } from '../couchdb.service';


@Component({
  selector: 'app-doctorentry',
  templateUrl: './doctorentry.component.html',
  styleUrls: ['./doctorentry.component.css']
})
export class DoctorentryComponent implements OnInit {
doctorform:FormGroup
object:any=[]
  formdata: any;
  constructor(private couchdb:CouchdbService,private toastr:ToastrService,private router:Router) {
    console.log("doctor entry") ;
  }

  ngOnInit(): void {
    this.doctorform = new FormGroup({
      doctorname: new FormControl('',[Validators.required,Validators.minLength(10)]),
      specification: new FormControl('',[Validators.required]),
      place:new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required]),
      type:new FormControl('doctor')
      
  });

}
get doctorname() {
  return this.doctorform.get('doctorname');
} 

get specification() {
  return this.doctorform.get('specification');
} 

get place() {
  return this.doctorform.get('place');
} 

get age() {
  return this.doctorform.get('age');
} 

storing(formdata){
  console.log(formdata);
  console.log("formdata",formdata);
  this.couchdb.add("c_19_care",formdata).subscribe(res=>{
    console.log(res);
    
this.toastr.success("data posted successfully");
  },err=>{
    this.toastr.error("data failed to post",err);
  });
}
backClick(){
  this.router.navigate(['/adminform']);
}
}