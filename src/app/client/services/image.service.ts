import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Response } from '@angular/http';
import {HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Image } from '../model/image';
import { SubmittedImage } from '../../admin/model/submittedImage';
import { environment } from '../../../environments/environment';

@Injectable()
export class ImageService {
  image: Image;
  constructor( private http: HttpClient) {
  }
  
  /**
   * Returns a new Image object containing image file metadata such as the base64 encoded string for binary data.
   * @param e event handler for file type input
   */
  readImage(e: any): Observable<Image | string>  {
    const q = new Observable<Image | string>((observable) => {
      let file = e.target.files[0];
      let reader = new FileReader();      
      reader.readAsDataURL(file);
      reader.onload = (fResults: any) => {
        if ((file.type as string).indexOf('image') > -1 && file.size < 15360000 && this.isFileExtensionSupported(file.name)) {
          let image: Image = new Image();
          image.filename = file.name;
          image.data = reader.result;
          observable.next(image);
          observable.complete();
        } else if ((file.type as string).indexOf('image') === -1 || !this.isFileExtensionSupported(file.name)) {
          observable.next('Supported file types are *.jpg, *.gif, or *.png');
          observable.complete();
        } else if (file.size >= 15360000 ) {
          observable.next('The maximum file size for upload allowed is 15 MB only.');
          observable.complete();
        } else {
          observable.next('There was an error in reading the file.');
          observable.complete();
        }
      }
    });
    return q;
  }
  isFileExtensionSupported(fn: string): boolean {
    return (fn.indexOf('.png') > -1 || fn.indexOf('.jpg') > -1 ||  fn.indexOf('.gif') > -1)
  }
  getUploadedImage(): Image {
    return this.image;
  }
  uploadImage(img: Image): Observable<Image | string> {
    this.image = img;    
    let modelCopy: Image = new Image();
    modelCopy.data = img.data.substr('data:image/x-icon;base64,'.length - 2);//filter out base64 header from image data
    modelCopy.filename = img.filename;
    modelCopy.id = img.id;    

    // POST a single image    
    const q = new Observable<Image | string>((observable) => {
      this.http.post(environment.resourceDirectory.base, modelCopy).subscribe((response: SubmittedImage) => {
        observable.next(this.image);
        observable.complete();
      }, (err: any) => {
        observable.error('You may only use the unique code which can be found in the original email.');        
      });
    });
    return q;    
  }
}
