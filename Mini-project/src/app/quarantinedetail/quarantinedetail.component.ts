import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm,FormBuilder,Validators } from '@angular/forms';
import { CouchdbService } from '../couchdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quarantinedetail',
  templateUrl: './quarantinedetail.component.html',
  styleUrls: ['./quarantinedetail.component.css']
})
export class QuarantinedetailComponent implements OnInit {
title='tabchange';
myForm: FormGroup;
guardianform:FormGroup;
medicalreports:FormGroup;
quaratineform:FormGroup;
inchargeform:FormGroup;
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
    type:''
  }
  object1:any={
    status:'',
    gfname:'',
    glname:'',
    gdob:'',
    gage:'',
    gbloodgroup:'',
    ggender:'',
    gmobileno:'',
    gaddress:'',
    type:''
  }
  object2:any={
    inhalers:'',
    herbal:'',
    pregnant:'',
    steroids:'',
    medical:'',
    Diabetes:'',
    smoker:'',
    disease:'',
    hospital:'',
    allergies:'',
    covidtest:'',
    ecgreport:'',
    mrireport:'',
    type:''

  }
  constructor(private api:CouchdbService,private router:Router) {
   
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
          type:new FormControl('personalform')
      })
      this.guardianform = new FormGroup({
        status: new FormControl('',[Validators.required]),
        gfname: new FormControl('',[Validators.required, Validators.minLength(10)]),
        glname:new FormControl('',[Validators.required]),
        gdob: new FormControl('',[Validators.required]),
        gage: new FormControl('',[Validators.required]),
        gbloodgroup: new FormControl('',[Validators.required]),
        
          ggender: new FormControl('',[Validators.required]),
          gmobileno: new FormControl('',[Validators.required]),
          gaddress:new FormControl('',[Validators.required]),
          type:new FormControl('guardianform')
      })
      this.medicalreports = new FormGroup({
        inhalers: new FormControl('',[Validators.required]),
        herbal: new FormControl('',[Validators.required]),
        pregnant:new FormControl('',[Validators.required]),
        steroids: new FormControl('',[Validators.required]),
        medical: new FormControl('',[Validators.required]),
        Diabetes: new FormControl('',[Validators.required]),
        
        smoker: new FormControl('',[Validators.required]),
        disease: new FormControl('',[Validators.required]),
        hospital:new FormControl('',[Validators.required]),
        allergies:new FormControl('',[Validators.required]),
        covidtest:new FormControl('',[Validators.required]),
        ecgreport:new FormControl('',[Validators.required]),
        mrireport:new FormControl('',[Validators.required]),
          type:new FormControl('medicalreports')
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
   
    get status() {
      return this.guardianform.get('status');
    } 
   
    get gfname() {
      return this.guardianform.get('fname');
    } 
   
    get glname() {
      return this.guardianform.get('lname');
    } 
   
    get gdob() {
      return this.guardianform.get('dob');
    } 
   
    get gage() {
      return this.guardianform.get('age');
    } 
   
    get ggender() {
      return this.guardianform.get('gender');
    } 
   
    get gmobileno() {
      return this.guardianform.get("mobileno");
    } 
   
    get gaddress() {
      return this.guardianform.get("address");
    } 
    get gbloodgroup() {
      return this.guardianform.get("bloodgroup");
    } 
    get inhalers() {
      return this.guardianform.get("inhalers");
    } get herbal() {
      return this.guardianform.get("herbal");
    }
    get pregnant() {
      return this.guardianform.get("pregnant");
    }get steroids() {
      return this.guardianform.get("steroids");
    }
    get medical() {
      return this.guardianform.get("medical");
    } get Diabetes() {
      return this.guardianform.get("diabetes");
    }
    get smoker() {
      return this.guardianform.get("smoker");
    }
    get disease() {
      return this.guardianform.get("disease");
    }get hospital() {
      return this.guardianform.get("hospital");
    }
    get allergies() {
      return this.guardianform.get("allergies");
    }
    get covidtest() {
      return this.guardianform.get("covidtest");
    }
    get ecgreport() {
      return this.guardianform.get("ecgreport");
    }
    get mrireport() {
      return this.guardianform.get("mrireport");
    }
   
   
    storing(formdata){
      console.log(formdata);
      this.api.add("c_19_care",formdata.value).subscribe(res=>{
        console.log(res);
        alert("Your data was posted successfully!");
      },rej=>{
        alert("Can not post data"+rej);
      });
    }
    // storinga(){
    //   console.log(this.guardianform);
    //   // this.store.pushData(formdata);
    //   this.api.add("c_19_care",this.guardianform.value).subscribe(res=>{
    //     console.log(res);
    //     alert("Your data was posted successfully!");
    //   },rej=>{
    //     alert("Can not post data"+rej);
    //   });
    // }
  
id:any = "personalform";
tabchange(ids:any){
  this.id=ids;
  console.log(this.id);
}
}
