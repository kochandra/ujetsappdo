import { Injectable } from '@angular/core';
import { Image } from '../model/image';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ImageService {
  image: Image;
  constructor() { 
  }
  
  /**
   * Returns a new Image object containing image file metadata such as the base64 encoded string for binary data.
   * @param e event handler for file type input
   */
  readImage(e: any): Observable<Image>  {
    const q = new Observable<Image>((observable) => {
      let file = e.target.files[0];
      let reader = new FileReader();      
      reader.readAsDataURL(file);
      reader.onload = (fResults: any) => {
        if ((file.type as string).indexOf('image') > -1) {
          let image: Image = new Image();
          image.filename = file.name;
          image.data = reader.result;
          observable.next(image);
          observable.complete();
        } else {
          observable.next(new Image());
          observable.complete();
        }      
      }
    });
    return q;
  }
  getUploadedImage(): Image {
    return this.image;
  }
  uploadImage(img: Image): Observable<boolean> {
    //TODO: POST a single image    
    //TODO: filter out data:image/x-icon;base64, from image data
    this.image = img;
    return of(true);
  }
}
