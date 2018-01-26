import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../model/image';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-my-submission',
  templateUrl: './my-submission.component.html',
  styleUrls: ['./my-submission.component.scss']
})
export class MySubmissionComponent implements OnInit {
  image: Image;
  hasImagePreview: boolean;
  hasUserInput: boolean;
  constructor(private router: Router, private route: ActivatedRoute, private imageService: ImageService, private titleService: Title) {
    this.image = new Image();
    this.image.id = this.route.snapshot.paramMap.get('uniqueCode') || this.image.id;
    this.hasUserInput = false;
    this.titleService.setTitle('Image Upload');
  }

  ngOnInit() {

  }

  isFormValid(): boolean {
    return this.hasUserInput && this.hasValidUniqueImageCode() && this.hasValidImage();
  }
  hasValidUniqueImageCode() {
    return !this.hasUserInput || this.image.id.length > 0;
  }
  hasValidImage(): boolean {
    return !this.hasUserInput || this.image.filename.length > 0;
  }
  onUniqueImageCodeChange() {
    this.hasUserInput = true;
  }
  uploadImage(img: Image) {
    this.imageService.uploadImage(img).subscribe((success) => {
      if (success)
        this.router.navigate(['/my-image']);
    });
  }
  onFileChange(e: any) {
    this.hasUserInput = true;
    this.image.data = '';
    this.image.filename = '';
    if (e.target.files && e.target.files.length > 0) {
      this.imageService.readImage(e).subscribe((img: Image) => {
        this.image.data = img.data;
        this.image.filename = img.filename;
      });
    }
  }
}
