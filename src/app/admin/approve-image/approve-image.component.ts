import { Component, OnInit } from '@angular/core';
import { SubmittedImage } from '../model/submittedImage';
import { ImagesService } from '../services/images.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ImagePlaceholderPipe } from '../pipes/image-placeholder.pipe';
import { Observable } from 'rxjs/Observable';

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
    let img: SubmittedImage = this.getSubmittedImage(this.id);

    if (!img) {
      this.image = new SubmittedImage();
      this.fetchSubmittedImage(this.id)
    } else {
      this.image = img;
    }

    this.titleService.setTitle('Submission Review');
  }
  /**
   * make a network call
   * //view maintains a copy of model before confirming changes
   * @param id 
   */
  fetchSubmittedImage(id: number) {
    this.imagesService.getImage(id).subscribe((img: SubmittedImage) => {
      this.image = Object.assign({}, img); 
    });;
  }
  /**
   * get image from cache
   * //view maintains a copy of model before confirming changes
   * @param id 
   */
  getSubmittedImage(id: number): SubmittedImage {
    let img: SubmittedImage = this.imagesService.findImageById(id);
    if (img)
      return Object.assign({}, img);
    else  
      return null;
  }
  isModelDifferent() {
    //copy image model so that changes can be confirmed or canceled
    let keys: Array<string> = Object.keys(this.image);
    let imgInService: SubmittedImage = this.imagesService.findImageById(this.id);    
    let dirty = false;
    keys.forEach((key) => {
      dirty = dirty || (imgInService && imgInService[key] !== this.image[key]);
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
      this.router.navigate(['/admin-search']);
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
