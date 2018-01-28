import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
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
  query: string;
  loading: boolean;
  constructor(private imagesService: ImagesService, private titleService: Title, private route: ActivatedRoute, private router: Router) {
    this.images = [];
    this.sortFieldName = 'name';
    this.titleService.setTitle('Submission Review');
  }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe((params) => {
      let q: string = params['q'] || ''; //query param
      this.loading = true;
      this.imagesService.getImages(q).subscribe((imgs: Array<SubmittedImage>) => {
        this.query = q;
        this.loading = false;
        this.images = imgs;
      }); 
    });    

  }
  isApproved(img: SubmittedImage) {
    return this.imagesService.isImageApproved(img);
  }  
  isRejected(img: SubmittedImage) {
    return this.imagesService.isImageRejected(img);
  }    
  onSortFieldNameChange(fieldName: string) {
    if (this.sortFieldName === fieldName)
      this.sortFieldName = '!' + fieldName;
    else
      this.sortFieldName = fieldName;
  }

}
