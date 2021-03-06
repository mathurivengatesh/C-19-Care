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
doctorForm:FormGroup
object:any=[];
resObj:any;
formdata: any;
  constructor(private couchdb:CouchdbService,private toastr:ToastrService,private router:Router) {
    console.log("doctor entry") ;
  }

  ngOnInit(): void {
    this.doctorForm = new FormGroup({
      doctorname: new FormControl('',[Validators.required,Validators.minLength(10)]),
      specification: new FormControl('',[Validators.required]),
      place:new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required]),
      type:new FormControl('doctor')
      
  });

}
get doctorname() {
  return this.doctorForm.get('doctorname');
} 

get specification() {
  return this.doctorForm.get('specification');
} 

get place() {
  return this.doctorForm.get('place');
} 

get age() {
  return this.doctorForm.get('age');
} 

doctorDetails(formdata:any){
  console.log(formdata);
  console.log("formdata",formdata);
  if(this.doctorForm.valid){
  this.couchdb.add(formdata).subscribe(res=>{
    console.log(res);
    this.resObj=res;
this.toastr.success("Data Posted Successfully");
  },err=>{
    this.resObj=err;
    this.toastr.error("Data Failed To Post",this.resObj.error.reason);
  });
}else{
  this.toastr.error("Data Invalid");
}
}
backClick(){
  this.router.navigate(['/adminform']);
}
}