import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultpageComponent } from './defaultpage/defaultpage.component';
import { EmployerAddJobDetailsPageComponent } from './employer-add-job-details-page/employer-add-job-details-page.component';
import { EmployerAddEmpDetailsPageComponent } from './employer_add_empDetails_page/employer-add-emp-details-page.component';
import { JobInfoPageComponent } from './job-info-page/job-info-page.component';
import { JobListPageComponent } from './job-list-page/job-list-page.component';
import { JobSeekerAddComponent } from './job-seeker-add-page/job-seeker-add.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {path:'',redirectTo:'MainPage',pathMatch:'full'},
  {path: 'MainPage', component: DefaultpageComponent},
  {path: 'notFound', component: NotFoundComponentComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'registerEmp', component: EmployerAddEmpDetailsPageComponent},
  {path: 'registerJobDetails', component: EmployerAddJobDetailsPageComponent},
  {path: 'registerJobSeeker', component: JobSeekerAddComponent},
  {path: 'jobInfo', component: JobInfoPageComponent},
  {path: 'jobs', component: JobListPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents=[DefaultpageComponent,
//                                 NotFoundComponentComponent,
//                                 LoginPageComponent,
//                                 RegisterPageComponent,
//                                 EmployerAddEmpDetailsPageComponent,
//                                 EmployerAddJobDetailsPageComponent,
//                                 JobSeekerAddComponent,
//                                 JobInfoPageComponent,
//                                 JobListPageComponent
//                               ];
