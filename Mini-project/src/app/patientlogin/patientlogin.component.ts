import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent implements OnInit {
  login: FormGroup;
  patientlogin:FormGroup;
  object:any={
patientid:"",
dob:""
  }

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      Patientid: new FormControl(''),
      psw: new FormControl(''),
    });
  }
  onclick(){
    if(this.object.patientid === "mathuir@23" && this.object.dob === "2022-05-07"){
      this.route.navigate(['/patientpage']);
    }
  }
  onSubmit(form: FormGroup) {
  
    console.log('Valid?', form.valid); // true or false
    console.log('patientid', form.value.Patientid);
    console.log('dob', form.value.dob);
}

}
