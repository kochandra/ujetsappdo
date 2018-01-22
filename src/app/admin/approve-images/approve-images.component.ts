import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SubmittedImage } from '../model/submittedImage';
import { ImagesService } from '../services/images.service';
import { ImagePlaceholderPipe } from '../pipes/image-placeholder.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';

@Component({
  selector: 'app-approve-images',
  templateUrl: './approve-images.component.html',
  styleUrls: ['./approve-images.component.scss']
})
export class ApproveImagesComponent implements OnInit {
  images: Array<SubmittedImage>;
  sortFieldName: string;
  constructor(private imagesService: ImagesService, private titleService: Title) {
    this.images = [];
    this.sortFieldName = 'name';
    this.titleService.setTitle('Admin');
  }

  ngOnInit() {
    this.imagesService.getImages().subscribe((imgs: Array<SubmittedImage>) => {
      this.images = imgs;
    });
  }

  onSortFieldNameChange(fieldName: string) {
    if (this.sortFieldName === fieldName)
      this.sortFieldName = '!' + fieldName;
    else
      this.sortFieldName = fieldName;
  }

}
