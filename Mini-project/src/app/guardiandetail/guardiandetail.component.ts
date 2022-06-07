import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CouchdbService } from '../couchdb.service';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-guardiandetail',
  templateUrl: './guardiandetail.component.html',
  styleUrls: ['./guardiandetail.component.css']
})
export class GuardiandetailComponent implements OnInit {
title='tabchange';
id:any
type:any
guardianform:FormGroup;
guardian:any;
guardianData:any;
 
  object:any={
    status:'',
    gfname:'',
    glname:'',
    gdob:'',
    gage:'',
    gbloodgroup:'',
    ggender:'',
    gmobileno:'',
    gaddress:'',
    qtype:'',
    days:'',
    docname:'',
    nurname:'',
    attenname:'',
    driver:'',
    

  }
  
  constructor(private api:CouchdbService,private router:Router,private toastr:ToastrService,private activatedroute:ActivatedRoute) {
   this.display();
   }
ngOnInit(): void {
     
      this.guardianform = new FormGroup({
        status: new FormControl('',[Validators.required]),
        gfname: new FormControl('',[Validators.required, Validators.minLength(10)]),
        glname:new FormControl('',[Validators.required]),
        gdob: new FormControl('',[Validators.required]),
        gage: new FormControl('',[Validators.required]),
        gbloodgroup: new FormControl('',[Validators.required]),
        ggender: new FormControl('',[Validators.required]),
        gmobileno: new FormControl('',[Validators.required]),
        gaddress:new FormControl('',[Validators.required]),
        qtype:new FormControl('',[Validators.required]),
        days:new FormControl('',[Validators.required]),
        docname:new FormControl('',[Validators.required]),
        nurname:new FormControl('',[Validators.required]),
        attenname:new FormControl('',[Validators.required]),
        driver:new FormControl('',[Validators.required]),
      })
      this.activatedroute.queryParams.subscribe(params =>{
      console.log(params);
      this.id=params.id;
      this.type=params.type;
      console.log(this.id);
      console.log(this.type);
    }
     );
  
     
    }
   
    addrecord(Formvalue:NgForm){
      console.log(Formvalue);
      

    }  
  
      
   
    get status() {
      return this.guardianform.get('status');
    } 
   
    get gfname() {
      return this.guardianform.get('gfname');
    } 
   
    get glname() {
      return this.guardianform.get('glname');
    } 
   
    get gdob() {
      return this.guardianform.get('gdob');
    } 
   
    get gage() {
      return this.guardianform.get('gage');
    } 
   
    get ggender() {
      return this.guardianform.get('ggender');
    } 
   
    get gmobileno() {
      return this.guardianform.get("gmobileno");
    } 
   
    get gaddress() {
      return this.guardianform.get("gaddress");
    } 
    get qtype() {
      return this.guardianform.get("qtype");
    } 
    get days() {
      return this.guardianform.get("days");
    } 
    get docname() {
      return this.guardianform.get("docname");
    } 
    get nurname() {
      return this.guardianform.get("nurname");
    } 
    get attenname() {
      return this.guardianform.get("attenname");
    } 
    get driver() {
      return this.guardianform.get("driver");
    } 
   
    storing(formdata){
      console.log(formdata);
      formdata["patientid"]=this.id;
      formdata["type"]=this.type;
      console.log("formdata",formdata);
      this.api.add("c_19_care",formdata).subscribe(res=>{
        console.log(res);
        this.toastr.success("data posted successfully")
      },err=>{
      this.toastr.error("failed to post data",err)
      });
    }
   
    display() {

      let data = {
       selector: {
        type: "info"
      },
  
    }
    this.api.get(data).subscribe(res => {
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
id1:any = "guardianform";
tabchange(ids:any){
  this.id=ids;
  console.log(this.id);
}
}
