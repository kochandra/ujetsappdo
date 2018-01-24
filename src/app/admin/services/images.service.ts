import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Response } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SubmittedImage } from '../model/submittedImage';


@Injectable()
export class ImagesService {
  private images: Array<SubmittedImage> = [];
  private APPROVAL_STATUS = {
    approved: 'Approved',
    rejected: 'Rejected',
    pending: 'Pending'
  };
  constructor(private http: HttpClient) {
  }

  getImages(): Observable<Array<SubmittedImage>> {
    if (this.images.length > 0) {
      return of(this.images);
    } else {
      //TODO: get the images    
      const q = new Observable<Array<SubmittedImage>>((observable) => {
        this.http.get(environment.resourceDirectory.base).subscribe((response: Array<SubmittedImage>) => {  
          this.images = response;
          observable.next(this.images);
          observable.complete();
        });
      });
      return q;           
    }
  }
  approveImage(img: SubmittedImage): SubmittedImage {
    img.approvalDecisionNotes = 'Image has been approved.';    
    img.approvalStatus = this.APPROVAL_STATUS.approved;
    return img;
  }
  rejectImage(img: SubmittedImage): SubmittedImage {
    img.approvalDecisionNotes = 'Image has been rejected.';
    img.approvalStatus = this.APPROVAL_STATUS.rejected;
    return img;
  }
  markImageAsPending(img: SubmittedImage): SubmittedImage {
    img.approvalStatus = this.APPROVAL_STATUS.pending;
    return img;
  }
  isImageApproved(img: SubmittedImage): boolean {
    return img.approvalStatus === this.APPROVAL_STATUS.approved;
  }
  isImagePending(img: SubmittedImage): boolean {
    return img.approvalStatus === this.APPROVAL_STATUS.pending;
  }
  updateImage(image: SubmittedImage): Observable<boolean> {
    //PUT decision
    const q = new Observable<boolean>((observable) => {
      let img: SubmittedImage = this.updateImageModel(image);
      this.http.put(environment.resourceDirectory.base + img.id, img).subscribe((response: Response) => {
        observable.next(true);
        observable.complete();
      }, (err) => {
        observable.next(false);
        observable.complete();
      });
    });
    return q;       
  }

  /**
   * //TODO: unit test these
   */
  updateImageModel(updatedImage: SubmittedImage): SubmittedImage {
    let index: number = this.images.findIndex((img) => {
      return img.id === updatedImage.id;
    });
    if (index > -1)
      this.images.splice(index, 1, updatedImage); //remove old

    return updatedImage;

  }
  getImageById(id: number): SubmittedImage {
    let index: number = this.images.findIndex((img) => {
      return img.id === id;
    });
    if (index > -1)
      return this.images[index];
    else
      return new SubmittedImage();
  }
}

