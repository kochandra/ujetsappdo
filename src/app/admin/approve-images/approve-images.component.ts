import { Component, OnInit } from '@angular/core';
import { SubmittedImage } from '../model/submittedImage';
import { ImagesService } from '../services/images.service';
import { ImagePlaceholderPipe } from '../pipes/image-placeholder.pipe';

@Component({
  selector: 'app-approve-images',
  templateUrl: './approve-images.component.html',
  styleUrls: ['./approve-images.component.scss']
})
export class ApproveImagesComponent implements OnInit {
  images: Array<SubmittedImage>;
  constructor(private imagesService: ImagesService) {
    this.images = [];
   }

  ngOnInit() {
    this.imagesService.getImages().subscribe((imgs: Array<SubmittedImage>) => {
      this.images = imgs;
    });
  }

}
