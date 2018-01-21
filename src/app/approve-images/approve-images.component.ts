import { Component, OnInit } from '@angular/core';
import { Image } from '../model/image';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-approve-images',
  templateUrl: './approve-images.component.html',
  styleUrls: ['./approve-images.component.scss']
})
export class ApproveImagesComponent implements OnInit {
  images: Array<Image>;
  constructor(private imagesService: ImagesService) {
    this.images = [];
   }

  ngOnInit() {
    this.imagesService.getImages().subscribe((imgs: Array<Image>) => {
      this.images = imgs;
    });
  }

}
