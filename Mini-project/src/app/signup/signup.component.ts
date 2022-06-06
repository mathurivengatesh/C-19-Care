import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  object:any={
    email: '',
    mobileno: '',
    password: '',
    cpsw:'',
    _id:''
  
  };
  alldata:any;
  constructor(private api:ApiServiceService, private router:Router) {
    
   }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl(''),
      mobileno: new FormControl(''),
      password: new FormControl(''),
      cpsw: new FormControl(''),
      type: new FormControl('user')
    });
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
      
    },rej=>{
      console.log("error",rej);
    })
   
  }
  call(){
    alert("your Registration successful") ;
  }
  
  }
    
    
  

