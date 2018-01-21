import { Component, OnInit } from '@angular/core';
import { SubmittedImage } from '../model/submittedImage';
import { ImagesService } from '../services/images.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ImagePlaceholderPipe } from '../pipes/image-placeholder.pipe';

@Component({
  selector: 'app-approve-image',
  templateUrl: './approve-image.component.html',
  styleUrls: ['./approve-image.component.scss']
})
export class ApproveImageComponent implements OnInit {
  image: SubmittedImage; //shallow copy of model from service so that changes can be canceled
  code: string;
  constructor(private imagesService: ImagesService, private route: ActivatedRoute, private router: Router) {
    this.image = new SubmittedImage(); //TESTING!!!
  }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('uniqueCode');
    this.image = this.getSubmittedImage();
  }
  getSubmittedImage(): SubmittedImage {
    return Object.assign({}, this.imagesService.getImageByUniqueCode(this.code));
  }
  isModelDifferent() {
    //copy image model so that changes can be confirmed or canceled
    let keys: Array<string> = Object.keys(this.image);
    let dirty = false;
    keys.forEach((key) => {
      dirty = dirty || (this.imagesService.getImageByUniqueCode(this.code)[key] !== this.image[key]);
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
    this.imagesService.updateImageByUniqueCode(this.code, this.image).subscribe((success) => {
      if (success)
      this.router.navigate(['/my-approvals']);
      //TODO: show error message if success false 
    });
  }
  isPending(img: SubmittedImage) {
    return this.imagesService.isImagePending(img);
  }
  isApproved(img: SubmittedImage) {
    return this.imagesService.isImageApproved(img);
  }  
}
