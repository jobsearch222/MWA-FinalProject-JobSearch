import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobListComponent } from '../job-list/job-list.component';
//import { JobListComponent } from './JobListPageComponent';



@NgModule({
  declarations: [JobListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: JobListComponent }
    ])
  ],
  providers: [],
  bootstrap: [JobListComponent]
})
export class CourseModule { }