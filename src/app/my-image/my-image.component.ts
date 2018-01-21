import { Component, OnInit, Input } from '@angular/core';
import { ImagePreviewComponent } from '../image-preview/image-preview.component';
import { Image } from '../model/image';

/**
 * This is the card for images.
 */
@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.scss']
})
export class MyImageComponent implements OnInit {
  @Input() image: Image;
  constructor() { }

  ngOnInit() {
  }

}
