import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CouchdbService } from '../couchdb.service';

@Component({
  selector: 'app-patientpage',
  templateUrl: './patientpage.component.html',
  styleUrls: ['./patientpage.component.css']
})
export class PatientpageComponent implements OnInit {
  personal:any;
  personalData:any;
  constructor(private couch:CouchdbService,private router:Router) {this.display() }

  ngOnInit(): void {
}
 

display() {

 let data = {
  selector: {
   type: "personalform"
 },
 
   }
   
  //get the all data
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

}
  