import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminformComponent } from './adminform/adminform.component';
import { GuardiandetailComponent } from './guardiandetail/guardiandetail.component';
import { MedicalreportComponent } from './medicalreport/medicalreport.component';
import { QuarantinedetailComponent } from './quarantinedetail/quarantinedetail.component';
import { InchargedetailComponent } from './inchargedetail/inchargedetail.component';
import { PatientpageComponent } from './patientpage/patientpage.component';
import { ServiceComponent } from './service/service.component';
import { PatientdetailComponent } from './patientdetail/patientdetail.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DoctorentryComponent } from './doctorentry/doctorentry.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HelpComponent,
    AdminloginComponent,
    PatientloginComponent,
    BannerComponent,
    FooterComponent,
    NavbarComponent,
    SignupComponent,
    AdminformComponent,
    GuardiandetailComponent,
    MedicalreportComponent,
    QuarantinedetailComponent,
    InchargedetailComponent,
    PatientpageComponent,
    ServiceComponent,
    PatientdetailComponent,
    DoctorentryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule,
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
