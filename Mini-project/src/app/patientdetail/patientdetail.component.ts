import { Component, OnInit } from '@angular/core';
import { CouchdbService } from '../couchdb.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patientdetail',
  templateUrl: './patientdetail.component.html',
  styleUrls: ['./patientdetail.component.css']
})
export class PatientdetailComponent implements OnInit {
guardian:any;
guardianData:any;
personal:any;
personalData:any=[];
  constructor(private couch:CouchdbService,private router:Router,private toastr:ToastrService) {this.display(); 
    this.store();}

  ngOnInit(): void {
    console.log("patientdetail");
    this.tabchange('personalform');
  
  
  }
  store(){
  this.id = localStorage.getItem('patientid')
   
    let data = {
      selector: {
       patientid: this.id
     },
 
   }
   this.couch.get(data).subscribe(res => {
     this.personal=res;
     console.log(res);
     this.personal = this.personal.docs;
      this.personalData = this.personal
      console.log(this.personalData[0]);
     for (const array in this.personalData) {
      let  id:any = this.personalData[array]._id;
      localStorage.setItem("personalid",id);
      console.log(this.personalData[array])
     }
     
    });
   }
  
  display() {
    this.id = localStorage.getItem('personalid')
    let data = {
     selector: {
      patientid: this.id
    },

  }
  this.couch.get(data).subscribe(res => {
    this.guardian=res;
    console.log(res);
    this.guardian = this.guardian.docs;
     this.guardianData = this.guardian
     console.log(this.guardianData[0]);
    for (const array in this.guardianData) {
     console.log(this.guardianData[array])
    }
    
   });
  }
  id:any = "personalform";
  tabchange(ids:any){
    this.id=ids;
    
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/home'],{});
    this.toastr.success("logged out");
  }
}
