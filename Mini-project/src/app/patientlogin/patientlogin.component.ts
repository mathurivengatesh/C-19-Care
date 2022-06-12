import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from '../api-service.service';
import { CouchdbService } from '../couchdb.service';

@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent implements OnInit {
  patientLogin:FormGroup;
  flag=0;
  object:any=[];
  allData:any;
 
  constructor(private router:Router,private api:ApiServiceService, private couchdb:CouchdbService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.patientLogin = new FormGroup({
      patientid: new FormControl('',[Validators.required]),
      mobileno: new FormControl('',[Validators.required]),
    });
    this.couchdb.validate().subscribe(data=>{
      this.allData=data;
      this.allData=this.allData.docs;
      for(const i in this.allData){
       if(Object.prototype.hasOwnProperty.call(this.allData,i)){
        const elt = this.allData[i];
        this.api.getSupplierId(elt._id).subscribe(res=>{
        this.object.push(res);
        })
       }
 }
   })
}

adminFormData(formvalue: any) {
console.log(formvalue);
for (const i of this.object) {
  if (
    i.patientid == formvalue.patientid &&
    i.mobileno == formvalue.mobileno
  ) {
    let  id:any = i.patientid;
  localStorage.setItem("patientid",id);
    this.flag = 1;
  }
}
if (this.flag == 1) {
  this.toastr.success("access granted")
  this.router.navigate(['/patientdetail']);
} else {
  this.toastr.error("Invalid user")
  location.reload();
}
}
}
    


