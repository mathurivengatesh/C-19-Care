import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm,FormBuilder,Validators } from '@angular/forms';
import { CouchdbService } from '../couchdb.service';

@Component({
  selector: 'app-quarantinedetail',
  templateUrl: './quarantinedetail.component.html',
  styleUrls: ['./quarantinedetail.component.css']
})
export class QuarantinedetailComponent implements OnInit {
title='tabchange';
myForm: FormGroup;
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
    type:'personalform'
  }
  constructor(private api:CouchdbService) {
   
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
          address:new FormControl('',[Validators.required])
      
      })
    }
    addrecord(Formvalue:NgForm){
      console.log(Formvalue);
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
   
   
   
   
    storing(){
      console.log(this.myForm);
      // this.store.pushData(formdata);
      this.api.add("c_19_care",this.myForm.value).subscribe(res=>{
        console.log(res);
        alert("Your data was posted successfully!");
      },rej=>{
        alert("Can not post data"+rej);
      });
    }
  
id:any = "personalform";
tabchange(ids:any){
  this.id=ids;
  console.log(this.id);
}
}
