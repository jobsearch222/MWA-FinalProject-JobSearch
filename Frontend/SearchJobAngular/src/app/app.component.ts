import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tiles=[
    {text: 'Searchbar', cols: 3, rows: 2, color: 'lightblue'},
    {text: 'Recent Jobs', cols: 1, rows: 6, color: 'lightgreen'},
    {text: 'Job Search Result', cols: 1, rows: 7, color: 'lightpink'},
    {text: 'Job Details', cols: 2, rows: 7, color: '#DDBDF1'},
  ];
}
