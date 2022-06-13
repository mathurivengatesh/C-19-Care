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
  user:any
  patientlist:any=[]
 
  constructor(private couch:CouchdbService,private router:Router, private toastr:ToastrService,private activatedroute:ActivatedRoute) {this.display() }

  ngOnInit(): void {
  console.log("patientpage")
}
delete(id:any,rev:any){
  if(confirm("confirm delete?")=== true){
  this.couch.Delete(id,rev).subscribe(res=>{
    console.log(res);
    this.toastr.success("data deleted successfully");
    window. location. reload();

  })
}else{
  this.toastr.error("failed to delete");
}
}
display() {

  this.user = localStorage.getItem('user')
 
 const data={
   "keys":["patient"+ this.user],
   "include_docs":true
 }
  this.couch.getpatient(data).subscribe(res => {
  this.personal=res;
  console.log(res);
  let response:any=res
  let length=response.rows.length;
  this.patientlist=[]
  for(let i=0;i<length;i++){
    this.patientlist.push(response.rows[i].doc)
  }
});
}
backClick(){
  this.router.navigate(['/adminform']);
}
addAdditionalInfo(id:any,type:any)
{
  this.router.navigate(
    ['/guardiandetail'],
    { queryParams: { id: id, 'type': type } }
  );
  console.log(id,type);
}
 
}

 