import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployerAddJobDetailsPageComponent } from './employer-add-job-details-page/employer-add-job-details-page.component';
import { EmployerAddEmpDetailsPageComponent } from './employer_add_empDetails_page/employer-add-emp-details-page.component';
import { JobInfoPageComponent } from './job-info-page/job-info-page.component';
import { JobListPageComponent } from './job-list-page/job-list-page.component';
import { JobSeekerAddComponent } from './job-seeker-add-page/job-seeker-add.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DefaultpageComponent } from './defaultpage/defaultpage.component';

@NgModule({
  declarations: [
    // main component
    AppComponent,

    //authentication pages
    RegisterPageComponent,
    LoginPageComponent,
    EmployerAddEmpDetailsPageComponent,
    EmployerAddJobDetailsPageComponent,
    JobSeekerAddComponent,

    //public pages
    JobInfoPageComponent,
    JobListPageComponent,
    NotFoundComponentComponent,
    DefaultpageComponent,
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
