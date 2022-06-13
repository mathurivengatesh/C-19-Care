import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CouchdbService } from '../couchdb.service';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-guardiandetail',
  templateUrl: './guardiandetail.component.html',
  styleUrls: ['./guardiandetail.component.css']
})
export class GuardiandetailComponent implements OnInit {
title='tabchange';
id:any;
type:any;
allData:any;
data:any;
guardianForm:FormGroup;
guardian:any;
guardianData:any;
resObj:any;
object:any=[];
doctorList:any=[];

 constructor(private couchdb:CouchdbService,private router:Router,private toastr:ToastrService,private activatedroute:ActivatedRoute,private api:ApiServiceService) {
    this.activatedroute.queryParams.subscribe(params =>{
      console.log(params);
      this.id=params.id;
      this.type=params.type;
      console.log(this.id);
      console.log(this.type);
    }
     );
   this.display();
   this.dropDown();
   }
ngOnInit(): void {
     this.guardianForm = new FormGroup({
        status: new FormControl('',[Validators.required]),
        gfname: new FormControl('',[Validators.required, Validators.minLength(8)]),
        glname:new FormControl('',[Validators.required]),
        gdob: new FormControl('',[Validators.required]),
        gage: new FormControl('',[Validators.required]),
        gbloodgroup: new FormControl('',[Validators.required]),
        ggender: new FormControl(''),
        gmobileno: new FormControl('',[Validators.required]),
        gaddress:new FormControl('',[Validators.required]),
        qtype:new FormControl('',[Validators.required]),
        days:new FormControl('',[Validators.required]),
        docname:new FormControl('',[Validators.required]),
        nurname:new FormControl('',[Validators.required]),
        attenname:new FormControl('',[Validators.required]),
        driver:new FormControl('',[Validators.required]),
      })
    }
    get status() {
      return this.guardianForm.get('status');
    } 
   
    get gfname() {
      return this.guardianForm.get('gfname');
    } 
   
    get glname() {
      return this.guardianForm.get('glname');
    } 
   
    get gdob() {
      return this.guardianForm.get('gdob');
    } 
    get gbloodgroup() {
      return this.guardianForm.get('gbloodgroup');
    } 
   
    get gage() {
      return this.guardianForm.get('gage');
    } 
   
    get ggender() {
      return this.guardianForm.get('ggender');
    } 
   
    get gmobileno() {
      return this.guardianForm.get("gmobileno");
    } 
   
    get gaddress() {
      return this.guardianForm.get("gaddress");
    } 
    get qtype() {
      return this.guardianForm.get("qtype");
    } 
    get days() {
      return this.guardianForm.get("days");
    } 
    get docname() {
      return this.guardianForm.get("docname");
    } 
    get nurname() {
      return this.guardianForm.get("nurname");
    } 
    get attenname() {
      return this.guardianForm.get("attenname");
    } 
    get driver() {
      return this.guardianForm.get("driver");
    } 
   
    dropDown() {
      const data = {
        selector:{
        "type": "doctor"
        }
      }
      this.couchdb.addInfoEdit( data).subscribe((res: any) => {
        console.log(res)
        this.doctorList = res.docs
        console.log("doctor list", this.doctorList)
      });
    }
  
  
    storing(formData:any){
      console.log(formData);
      formData["patientid"]=this.id;
      formData["type"]=this.type;
      console.log("formData",formData);
      this.couchdb.add("c_19_care",formData).subscribe(res=>{
        console.log(res);
        this.resObj=res;
        this.toastr.success("data posted successfully")
      },err=>{
        this.resObj=err;
      this.toastr.error("failed to post data",this.resObj.error.reason)
      });
    }
   display() {
      let data = {
      selector: {
      patientid:this.id,
      type:this.type
      },
  }
    console.log(data)
    this.couchdb.addInfoEdit(data).subscribe(res => {
      this.guardian=res;
      console.log(res);
      this.guardian = this.guardian.docs;
       if(this.guardian.length>0){
       this.setFormValue();
       this.toastr.error("data already exist ");
      }
       });
    }
   setFormValue(){
     console.log(this.guardian[0].status)
     this.status.setValue(this.guardian[0].status);
     this.gfname.setValue(this.guardian[0].gfname);
     this.glname.setValue(this.guardian[0].glname);
     this.gdob.setValue(this.guardian[0].gdob);
     this.gbloodgroup.setValue(this.guardian[0].gbloodgroup);
     this.gage.setValue(this.guardian[0].gage);
     this.ggender.setValue(this.guardian[0].ggender);
     this.gmobileno.setValue(this.guardian[0].gmobileno);
     this.gaddress.setValue(this.guardian[0].gaddress);
     this.qtype.setValue(this.guardian[0].qtype);
     this.days.setValue(this.guardian[0].days);
     this.docname.setValue(this.guardian[0].docname);
     this.nurname.setValue(this.guardian[0].nurname);
     this.attenname.setValue(this.guardian[0].attenname);
     this.driver.setValue(this.guardian[0].driver);
   }
   backClick(){
    this.router.navigate(['/patientpage']);
  } 
id1:any = "guardianForm";
tabchange(ids:any){
  this.id=ids;
  console.log(this.id);
}
}
