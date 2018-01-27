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
  imageErrorMessage: string;
  codeErrorMessage: string;
  hasError: boolean;
  submissionFailed: boolean;
  constructor(private router: Router, private route: ActivatedRoute, private imageService: ImageService, private titleService: Title) {
    this.image = new Image();
    this.image.id = this.route.snapshot.paramMap.get('uniqueCode') || this.image.id;
    this.hasUserInput = false;
    this.titleService.setTitle('Applicant Information Submission');
    this.imageErrorMessage = 'Please provide an image.';
    this.codeErrorMessage = 'You must provide a valid code.';
    this.submissionFailed = false;
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
    this.submissionFailed = false;
    this.imageService.uploadImage(img).subscribe(() => {
        this.router.navigate(['/my-info-complete']);
    }, (message: string) => {
      this.codeErrorMessage = message;
      this.submissionFailed = true;
    });
  }
  onFileChange(e: any) {
    this.hasUserInput = true;
    this.image.data = '';
    this.image.filename = '';
    if (e.target.files && e.target.files.length > 0) {
      this.imageService.readImage(e).subscribe((result: Image| string) => {
        if (typeof result === 'string') {
          this.imageErrorMessage = result;
        } else {
          this.image.data = result.data;
          this.image.filename = result.filename;
        }
      });
    }
  }
}
