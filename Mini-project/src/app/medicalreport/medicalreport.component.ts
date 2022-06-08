import { Component, OnInit } from '@angular/core';
import { CouchdbService } from '../couchdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicalreport',
  templateUrl: './medicalreport.component.html',
  styleUrls: ['./medicalreport.component.css']
})
export class MedicalreportComponent implements OnInit {
guardian:any;
guardianData:any;
  constructor(private couch:CouchdbService, private router:Router) { this.display() ; }

  ngOnInit(): void {
console.log("medical")  
  }
  display() {

    let data = {
     selector: {
      type: "info",
    
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
}
