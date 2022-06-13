import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { CouchdbService } from '../couchdb.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-quarantinedetail',
  templateUrl: './quarantinedetail.component.html',
  styleUrls: ['./quarantinedetail.component.css']
})
export class QuarantinedetailComponent implements OnInit {
title='tabchange';
myForm: FormGroup;
submit=false
alldata:any;
resObj:any;
 user = localStorage.getItem('user');
 
  object:any
 constructor(private couchdb:CouchdbService,private router:Router, private toastr:ToastrService,private api:ApiServiceService) {
   
   }

 ngOnInit(): void {
      this.myForm = new FormGroup({
        fname: new FormControl('',[Validators.required,Validators.minLength(10)]),
        lname: new FormControl('',[Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
        patientid:new FormControl('',[Validators.email,Validators.required]),
        dob: new FormControl('',[Validators.required]),
        age: new FormControl('',[Validators.required]),
        bloodgroup: new FormControl('',[Validators.required]),
        gender:new FormControl(''),
        mobileno: new FormControl('',[Validators.required]),
        address:new FormControl('',[Validators.required]),
        type:new FormControl('patient')
      })
    
    }
     get fname() {
      return this.myForm.get('fname');
    } 
   
    get lname() {
      return this.myForm.get('lname');
    } 
   
    get patientid() {
      return this.myForm.get('patientid');
    } 
   
    get dob() {
      return this.myForm.get('dob');
    } 
   
    get age() {
      return this.myForm.get('age');
    } 
   
    get gender() {
      return this.myForm.get('gender');
    } 
   
    get mobileno() {
      return this.myForm.get("mobileno");
    } 
   
    get address() {
      return this.myForm.get("address");
    } 
   
    checkForValidity(){
      const idValue = this.myForm.value['patientid']
      const patient = {
        'patientid':idValue,
        'type':'patient'
      } 
      this.couchdb.patientIdExist(patient).subscribe((response:any)=>{
        console.log(response)
        if(response.docs.length >=1){
        this.toastr.error("Id already exist");
        this.submit =false
        }
        else{
          this.submit =true
        }
      },err=>{
        console.error(err)
      })
    }
    storing(formdata:any){
      console.log(formdata);
      formdata.user = this.user;
      console.log("formdata",formdata);
      if(this.myForm.valid){
      this.couchdb.add("c_19_care",formdata).subscribe(res=>{
        console.log(res);
        this.resObj=res;
        this.toastr.success("data posted successfully");
        this.myForm.reset();
      
      },err=>{
        this.resObj=err;
        this.toastr.error("data failed to post",this.resObj.error.reason);
      });
    }
    else{
      this.toastr.error("data failed to post");
    }
  }
    backClick(){
      this.router.navigate(['/adminform']);
    }
   
id:any = "personalform";
tabchange(ids:any){
  this.id=ids;
  console.log(this.id);
}

}
