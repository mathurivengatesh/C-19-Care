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
alluser:any=[];
lookupIdArray=[];
docId:any=[];
dataItem:any;
value:any;
  constructor(private couch:CouchdbService,private router:Router,private toastr:ToastrService) { 
    this.store();
  }

  ngOnInit(): void {
    console.log("patientdetail");

    
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
      localStorage.setItem("patient",id);
      
    this.display();
    
    this.tabchange('personalform');
      console.log(this.personalData[array])
     }
     
    });
   }
  
  display() {
    this.id = localStorage.getItem('patient')
    let data = {
     selector: {
      patient: this.id
    },

  }
  this.couch.get(data).subscribe(res => {
    this.guardian=res;
    this.guardian = this.guardian.docs;
    if(res['docs'])
     {
      this.guardianData = this.guardian
     console.log(this.guardianData[0]);
     console.log(this.guardian[0].docname);
     this.docId = this.guardian[0].docname;
    this.couch.getDataById(this.docId).subscribe(dataItem =>{
      console.log(dataItem);
      this.value=dataItem;
      this.guardian[0].docname=this.value.doctorname;
      console.log(this.guardian[0].docname);
    
    })}
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
