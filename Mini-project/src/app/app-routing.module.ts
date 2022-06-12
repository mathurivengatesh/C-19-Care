import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminformComponent } from './adminform/adminform.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactComponent } from './contact/contact.component';
import { GuardiandetailComponent } from './guardiandetail/guardiandetail.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { PatientpageComponent } from './patientpage/patientpage.component';
import { QuarantinedetailComponent } from './quarantinedetail/quarantinedetail.component';
import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './signup/signup.component';
import { PatientdetailComponent } from './patientdetail/patientdetail.component';
import { DoctorentryComponent } from './doctorentry/doctorentry.component';

const routes: Routes = [ 
  {path:'',redirectTo:'home',pathMatch:'full'},
{path:'home', component:HomeComponent},
{path:'signup', component:SignupComponent},
{path:'adminform', component:AdminformComponent},
{path:'quarantinedetail', component:QuarantinedetailComponent},
{path:'patientpage',component:PatientpageComponent},
{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},
{path:'help', component:HelpComponent},
{path:'adminlogin', component:AdminloginComponent},
{path:'patientlogin', component:PatientloginComponent},
{path:'patientdetail', component:PatientdetailComponent},
{path:'guardiandetail', component:GuardiandetailComponent},
{path:'service', component:ServiceComponent},
{path:'doctorentry', component:DoctorentryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
