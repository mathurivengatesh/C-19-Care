import { Component, OnInit } from '@angular/core';
import { CouchdbService } from '../couchdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientdetail',
  templateUrl: './patientdetail.component.html',
  styleUrls: ['./patientdetail.component.css']
})
export class PatientdetailComponent implements OnInit {
guardian:any;
guardianData:any;
personal:any;
personalData:any;
  constructor(private couch:CouchdbService,private router:Router) {this.display(); 
    this.store();}

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  
  }
  store(){
    let data = {
      selector: {
       type: "patient"
     },
 
   }
   this.couch.get(data).subscribe(res => {
     this.personal=res;
     console.log(res);
     this.personal = this.personal.docs;
      this.personalData = this.personal
      console.log(this.personalData[0]);
     for (const array in this.personalData) {
      console.log(this.personalData[array])
     }
     
    });
   }
  
  display() {

    let data = {
     selector: {
      type: "info"
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
    console.log(this.id);
  }
}
