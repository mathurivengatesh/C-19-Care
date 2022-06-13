import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  login: FormGroup;
  flag=0;
  object:any=[];
  allData:any;
  constructor( private api: ApiServiceService,
    private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    });
      
      this.api.getData().subscribe(data=>{
        this.allData=data;
        this.allData=this.allData.rows;
        for(const i in this.allData){
         if(Object.prototype.hasOwnProperty.call(this.allData,i)){
          const elt = this.allData[i];
          this.api.getDataId(elt.id).subscribe(resp=>{
           this.object.push(resp);
          })
         } }
     })
  }
 

adminFormData(formvalue: any) {
  console.log(formvalue);
  for (const i of this.object) {
    if (
      i.email == formvalue.email &&
      i.password == formvalue.password
    ) {
      let  id:any = i._id;
    localStorage.setItem("userid",id);
      this.flag = 1;
    }
  }
  if (this.flag == 1) {
    this.toastr.success("access granted")
    this.router.navigate(['/adminform']);
  } else {
    this.toastr.error("Invalid user")
    location.reload();
  }
}
}
