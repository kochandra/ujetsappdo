import { Injectable } from '@angular/core';
import { Image } from '../model/image';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ImageService {

  constructor() { 
  }

  uploadImage(img: Image): Observable<boolean> {
    //TODO: POST a single image    
    //TODO: filter out data:image/x-icon;base64, from image data
    return of(true);
  }
}
