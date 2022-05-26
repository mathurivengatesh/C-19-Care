import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

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
    private router: Router) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
      // this.show=!this.show;
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
           // for (const iterator of this.object) {
           //  if(iterator.supplier==formvalue.supplier){
           //   console.log('hello',iterator.supplier);
           //  }       
           // }
          })
         }
     }
     
     })
  }
  getsupplier(formvalue:any){
  
}
//   onSubmit(login: FormGroup) {
//     console.log('Valid?', login.valid); // true or false
//     console.log('Username', login.value.Username);
//     console.log('psw', login.value.psw);
// }
adminFormData(formvalue: any) {
  console.log(formvalue);
  for (const i of this.object) {
    if (
      i.email == formvalue.email &&
      i.password == formvalue.password
    ) {
      this.flag = 1;
    }
  }
  if (this.flag == 1) {
    this.router.navigate(['/adminform']);
  } else {
    alert('Invalid user');
    location.reload();
  }
}
}
