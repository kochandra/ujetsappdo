import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ImageService } from '../services/image.service';
import { SubmittedImage } from '../../admin/model/submittedImage';

/**
 * This is the card for images.
 */
@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.scss']
})
export class MyImageComponent implements OnInit {
  image: SubmittedImage;
  constructor(private imageService: ImageService, private titleService: Title) {
    this.titleService.setTitle('My Image');
  }

  ngOnInit() {
    this.image = this.imageService.getUploadedImage();
  }

}
