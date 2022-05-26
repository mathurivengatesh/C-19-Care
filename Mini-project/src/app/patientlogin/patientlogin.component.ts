import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent implements OnInit {
  login: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.login = new FormGroup({
      Patientid: new FormControl(''),
      psw: new FormControl(''),
    });
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Username', form.value.Patientid);
    console.log('psw', form.value.psw);
}
}
