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

  onFileChange(e: any) {
    let reader = new FileReader();
    if(e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = (fResults: any) => {
        console.log(file.name); //TESTING!!!
        console.log(file.type); //TESTING!!!
        console.log(fResults.target.result); //TESTING!!!
        console.log(reader.result); //TESTING!!!
      };
    }    
  }
}
