import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CouchdbService } from '../couchdb.service';

@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent implements OnInit {
  patientlogin:FormGroup;
  flag=0;
  object:any=[];
  alldata:any;
 

  constructor(private router:Router,private api:CouchdbService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.patientlogin = new FormGroup({
      Patientid: new FormControl('',[Validators.required]),
      mobileno: new FormControl('',[Validators.required]),
    });
    this.api.validate().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.rows;
      console.log(this.alldata);
      for(const i in this.alldata){
       if(Object.prototype.hasOwnProperty.call(this.alldata,i)){
        const elt = this.alldata[i];
        console.log(elt.id);
        // this.api.getsupplierId(elt.id).subscribe(res=>{
        //  console.log(res);
        //  this.object.push(res);
        //  console.log('Fetched successfuly in add component');
        
        // })
       }
   }
   
   })

  }

adminFormData(formvalue: any) {
console.log(formvalue);
for (const i of this.object) {
  if (
    i.patientid == formvalue.Patientid &&
    i.mobileno == formvalue.mobileno
  ) {
    let  id:any = i._id;
  localStorage.setItem("userid",id);
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
    


