import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-my-submission',
  templateUrl: './my-submission.component.html',
  styleUrls: ['./my-submission.component.scss']
})
export class MySubmissionComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
    //this.location.go('/my-image');
  }

}
