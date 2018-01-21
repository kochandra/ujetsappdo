import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../model/image';


@Component({
  selector: 'image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit {
  @Input() public model: Image;
  constructor() { }

  ngOnInit() {

  }

}
