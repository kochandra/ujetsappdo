import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ImagePreviewComponent } from '../image-preview/image-preview.component';
import { Image } from '../model/image';

@Component({
  selector: 'app-my-submission',
  templateUrl: './my-submission.component.html',
  styleUrls: ['./my-submission.component.scss']
})
export class MySubmissionComponent implements OnInit {
  image: Image;
  hasImagePreview: boolean;
  constructor(private location: Location) {
    this.hasImagePreview = false;
   }

  ngOnInit() {
    //this.location.go('/my-image');
  }

  onFileChange(e: any) {
    let reader = new FileReader();
    if(e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = (fResults: any) => {
        if ((file.type as string).indexOf('image') > -1) {
          this.image = new Image();
          this.image.filename = file.name;
          this.image.id = new Date().getTime().toString();
          this.image.data = reader.result
          this.hasImagePreview = true;
          //          console.log(fResults.target.result); //TESTING!!!
        } else {
          console.log('cannot upload this file');
          this.hasImagePreview = false;
          this.image = new Image();
        }
      };
    }    
  }
}
