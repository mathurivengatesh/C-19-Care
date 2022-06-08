import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CouchdbService } from '../couchdb.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patientpage',
  templateUrl: './patientpage.component.html',
  styleUrls: ['./patientpage.component.css']
})
export class PatientpageComponent implements OnInit {
  personal:any;
  personalData:any;search:any;
 
  constructor(private couch:CouchdbService,private router:Router, private toastr:ToastrService,private activatedroute:ActivatedRoute) {this.display() }

  ngOnInit(): void {
  console.log("patientpage")

   
}
delete(id:any,rev:any){
  this.couch.Delete(id,rev).subscribe(res=>{
    console.log(res);
    this.toastr.success("data deleted successfully");
    window. location. reload();

  })
}

display() {

 let data = {
  selector: {
   type: "patient"
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

addAdditionalInfo(id,type)
{
 
  this.router.navigate(
    ['/guardiandetail'],
    { queryParams: { id: id, 'type': type } }
  );
  console.log(id,type);
}
 
}

  