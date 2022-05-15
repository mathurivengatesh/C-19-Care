import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [ 
  {path:'',redirectTo:'home',pathMatch:'full'},
{path:'home', component:HomeComponent},
{path:'signup', component:SignupComponent},

{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},
{path:'help', component:HelpComponent},
{path:'adminlogin', component:AdminloginComponent},
{path:'patientlogin', component:PatientloginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
