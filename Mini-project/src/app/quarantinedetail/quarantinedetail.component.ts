import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm,Validators } from '@angular/forms';
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
alldata:any
 user_id = localStorage.getItem('userid');
 
  object:any={
    fname:'',
    lname:'',
    patientid:'',
    dob:'',
    age:'',
    bloodgroup:'',
    gender:'',
    mobileno:'',
    address:'',
    type:'',
    
  }
 
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
        
          gender: new FormControl('',[Validators.required]),
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
      this.couchdb.validate2(patient).subscribe((response:any)=>{
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
  

  
    storing(formdata){
      console.log(formdata);
      formdata.user_id = this.user_id;
      console.log("formdata",formdata);
      this.couchdb.add("c_19_care",formdata).subscribe(res=>{
        console.log(res);
        
    this.toastr.success("data posted successfully");
      },err=>{
        this.toastr.error("data failed to post",err);
      });
    }
  
   
id:any = "personalform";
tabchange(ids:any){
  this.id=ids;
  console.log(this.id);
}

}
