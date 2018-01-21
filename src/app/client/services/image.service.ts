import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Response } from '@angular/http';
import { Image } from '../model/image';
import { SubmittedImage } from '../../admin/model/submittedImage';
import { environment } from '../../../environments/environment';
@Injectable()
export class ImageService {
  image: SubmittedImage;
  constructor( private http: Http) { 
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
  getUploadedImage(): SubmittedImage {
    /**
     * {
    params: new HttpParams().set('id', '3'),
  }
     */
    return this.image;
  }
  uploadImage(img: Image): Observable<SubmittedImage> {
    //TODO: POST a single image    
    //TODO: filter out data:image/x-icon;base64, from image data
    /*
    const q = new Observable<SubmittedImage>((observable) => {
      this.http.post(environment.resourceDirectory.base + '/' + environment.resourceDirectory.image, img).subscribe((response: Response) => {        
        observable.next(response.json() as SubmittedImage);
        observable.complete();
      });
    });
    return q;    
    */
    this.image = {
      filename: img.filename,
      name: img.filename,    
      id: 9001,
      emailStatus: 'Sent',
      approvalStatus: 'Pending',
      approvalDecisionNotes: '',
      uploadedDate: '01/21/2018',
      imageLink: img.data,
      uniqueCode: img.id
    };

    return of(this.image);
  }
}
