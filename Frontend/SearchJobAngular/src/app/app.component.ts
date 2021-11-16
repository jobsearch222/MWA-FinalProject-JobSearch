import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> Main component {{title}}</h1>
  <app-employer-add-emp-details-page></app-employer-add-emp-details-page>
  <app-employer-add-job-details-page></app-employer-add-job-details-page>
  <app-job-info-page></app-job-info-page>
  <app-job-list-page></app-job-list-page>
  <app-job-seeker-add></app-job-seeker-add>
  <app-login-page></app-login-page>
  <app-not-found-component></app-not-found-component>
  <app-register-page></app-register-page>

  `,
  styles: [`
  h1{
    color: green;
  }
  `]
})
export class AppComponent {

  title = 'SearchJobAngular';
  // state

}
