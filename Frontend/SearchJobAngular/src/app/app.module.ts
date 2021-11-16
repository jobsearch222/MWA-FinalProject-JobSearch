import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';



import { AppComponent } from './app.component';
<<<<<<< Updated upstream

import { EmployerAddJobDetailsPageComponent } from './employer-add-job-details-page/employer-add-job-details-page.component';
import { EmployerAddEmpDetailsPageComponent } from './employer_add_empDetails_page/employer-add-emp-details-page.component';
import { JobInfoPageComponent } from './job-info-page/job-info-page.component';
import { JobListPageComponent } from './job-list-page/job-list-page.component';
import { JobSeekerAddComponent } from './job-seeker-add-page/job-seeker-add.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DefaultpageComponent } from './defaultpage/defaultpage.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';;
import { AppRoutingModule } from './app-routing.module';
import { PostJobComponent } from './post-job/post-job.component';
import { JobListComponent } from './job-list/job-list.component';
import { HeaderComponent } from './header/header.component';




>>>>>>> Stashed changes

@NgModule({
  declarations: [
    // main component
    AppComponent,
<<<<<<< Updated upstream

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
    
=======
    PostJobComponent,
    JobListComponent,
    HeaderComponent,

 
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
    
  ],
>>>>>>> Stashed changes
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
