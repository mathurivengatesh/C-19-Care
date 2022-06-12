import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.css']
})
export class AdminformComponent implements OnInit {
 

  constructor(private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    console.log("adminform")
  }
logOut(){
  localStorage.clear();
  this.router.navigate(['/home'],{});
  this.toastr.success("logged out");

}
}
