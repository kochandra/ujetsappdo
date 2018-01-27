import { Component, OnInit } from '@angular/core';
import { SubmittedImage } from '../model/submittedImage';
import { ImagesService } from '../services/images.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ImagePlaceholderPipe } from '../pipes/image-placeholder.pipe';

@Component({
  selector: 'app-approve-image',
  templateUrl: './approve-image.component.html',
  styleUrls: ['./approve-image.component.scss']
})
export class ApproveImageComponent implements OnInit {
  image: SubmittedImage; //shallow copy of model from service so that changes can be canceled
  id: number;
  constructor(private imagesService: ImagesService, private route: ActivatedRoute, private router: Router, private titleService: Title) {
    this.image = new SubmittedImage(); //TESTING!!!
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.image = this.getSubmittedImage();
    this.titleService.setTitle('Applicant Submission Review');
  }
  getSubmittedImage(): SubmittedImage {
    return Object.assign({}, this.imagesService.getImageById(this.id));
  }
  isModelDifferent() {
    //copy image model so that changes can be confirmed or canceled
    let keys: Array<string> = Object.keys(this.image);
    let dirty = false;
    keys.forEach((key) => {
      dirty = dirty || (this.imagesService.getImageById(this.id)[key] !== this.image[key]);
    });
    return dirty;
  }
  onImageAdjudication(isApproved: boolean) {
    if (isApproved) {
      this.imagesService.approveImage(this.image);
    } else {
      this.imagesService.rejectImage(this.image);
    }
  }
  /**
   * This method will trigger a POST using the images service.
   */
  onImageAdjudicationConfirmation() {
    this.imagesService.updateImage(this.image).subscribe((success) => {
      if (success)
        this.router.navigate(['/admin']);
      //TODO: show error message if success false 
    });
  }
  isPending(img: SubmittedImage) {
    return this.imagesService.isImagePending(img);
  }
  isApproved(img: SubmittedImage) {
    return this.imagesService.isImageApproved(img);
  }  
  isRejected(img: SubmittedImage) {
    return this.imagesService.isImageRejected(img);
  }    
}
