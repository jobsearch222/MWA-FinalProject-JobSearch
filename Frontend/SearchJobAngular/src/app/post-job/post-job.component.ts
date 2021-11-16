import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  constructor() { }
newPost='';
enteredValue='';

  onAddPost(){
    this.newPost=this.enteredValue;
  }

  ngOnInit(): void {
  }

}
