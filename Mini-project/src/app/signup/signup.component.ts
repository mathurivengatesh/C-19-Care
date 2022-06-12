import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm,Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CouchdbService } from '../couchdb.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  resObj:any;
  object:any;
  alldata:any;
  submit=false
  constructor(private api:ApiServiceService, private router:Router, private toastr:ToastrService,private couchdb:CouchdbService) {
    
   }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      mobileno: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
      cpsw: new FormControl('',[Validators.required]),
      type: new FormControl('user')
    });
  }
  
  checkForValidity(){
    const emailValue = this.myForm.value['email']
    const email = {
      'email':emailValue,
      'type':'user'
    } 
    this.couchdb.validate3(email).subscribe((response:any)=>{
      console.log(response)
      if(response.docs.length >=1){
      this.toastr.error("email already exist");
      this.submit =false
      }
      else{
        this.submit =true
      }
    },err=>{
      console.error(err)
    })
  }
 
  adduser(Formvalue:NgForm){
    console.log(Formvalue);
    this.api.add(Formvalue).subscribe(data=>{
      console.log(data);
      this.resObj=data;
      if(this.resObj.errid=="non_200"){
        return this.toastr.error(this.resObj.name,this.resObj.message)
      }
      this.toastr.success("registration success");
      this.router.navigate(['/adminlogin']);
    },err=>{
      this.resObj=err;
      console.log(this.resObj);
      this.toastr.error("registration cancelled"+err);
    });
   
  }
  
  
  }
    
    
  

