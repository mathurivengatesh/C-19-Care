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
  alldata:any;
  constructor( private api: ApiServiceService,
    private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    });
      
      this.api.getsupplier().subscribe(data=>{
        console.log(data);
        console.log('Data was fetching');
        this.alldata=data;
        this.alldata=this.alldata.rows;
        console.log(this.alldata);
        for(const i in this.alldata){
         if(Object.prototype.hasOwnProperty.call(this.alldata,i)){
          const elt = this.alldata[i];
          console.log(elt.id);
          this.api.getsupplierId(elt.id).subscribe(res=>{
           console.log(res);
           this.object.push(res);
           console.log('Fetched successfuly in add component');
          
          })
         }
     }
     
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
