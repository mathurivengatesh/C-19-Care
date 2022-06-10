import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm,Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CouchdbService } from '../couchdb.service';
import { HttpCallInterceptor } from '../interceptor';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  resObj:any;
  object:any={
    email: '',
    mobileno: '',
    password: '',
    cpsw:'',
    _id:''
  
  };
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
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Email', form.value.email);
    console.log('Mobileno', form.value.mobileno);
    console.log('Password', form.value.password);
    console.log('Cpsw', form.value.cpsw);
    console.log('type', form.value.type);
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
      this.toastr.error("registration cancelled"+err);
    })
   
  }
  
  
  }
    
    
  

