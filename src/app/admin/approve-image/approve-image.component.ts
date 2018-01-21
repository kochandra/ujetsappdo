import { Component, OnInit } from '@angular/core';
import { SubmittedImage } from '../model/submittedImage';
import { ImagesService } from '../services/images.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ImagePlaceholderPipe } from '../pipes/image-placeholder.pipe';

@Component({
  selector: 'app-approve-image',
  templateUrl: './approve-image.component.html',
  styleUrls: ['./approve-image.component.scss']
})
export class ApproveImageComponent implements OnInit {
  image: SubmittedImage;
  constructor(private imagesService: ImagesService, private route: ActivatedRoute) {
    this.image = new SubmittedImage(); //TESTING!!!
  }

  ngOnInit() {
    this.image = this.getSubmittedImage();
  }
  getSubmittedImage(): SubmittedImage {
    let code: string = this.route.snapshot.paramMap.get('uniqueCode');
    return this.imagesService.getImageByUniqueCode(code);
  }
  onImageAdjudication(isApproved: boolean) {
    if (isApproved) {
      this.imagesService.approveImage(this.image);
    } else {
      this.imagesService.rejectImage(this.image);
    }
  }
  isPending(img: SubmittedImage) {
    return this.imagesService.isImagePending(img);
  }
  isApproved(img: SubmittedImage) {
    return this.imagesService.isImageApproved(img);
  }  
}
