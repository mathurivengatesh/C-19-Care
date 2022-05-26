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
  object:any=[]
  alldata:any;
  constructor(private api:ApiServiceService,router:Router) {
    
   }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl(''),
      mobileno: new FormControl(''),
      password: new FormControl(''),
      cpsw: new FormControl(''),
    });
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Email', form.value.email);
    console.log('Mobileno', form.value.mobileno);
    console.log('Password', form.value.password);
    console.log('Cpsw', form.value.cpsw);
  }
  adduser(Formvalue:NgForm){
    console.log(Formvalue);
    this.api.add(Formvalue).subscribe(data=>{
      console.log(data);
    })
  }
  call(){
    alert("your Registration successful") ;
  }
  
  }
    
    
  

