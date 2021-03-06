import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Response } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SubmittedImage } from '../model/submittedImage';


@Injectable()
export class ImagesService {
  private images: Array<SubmittedImage>;
  /**
   * query is cached in order to facillitate request caching
   */
  private query: string;
  private APPROVAL_STATUS = {
    approved: 'Approved',
    rejected: 'Rejected',
    pending: 'Pending'
  };
  constructor(private http: HttpClient) {
    this.query;
    this.images = [];
  }
  getImages(query?:string): Observable<Array<SubmittedImage>> {
    //GET the images    
    const q = new Observable<Array<SubmittedImage>>((observable) => {
      let url: string = environment.resourceDirectory.base;
      if (this.isQueryDifferent(query)) {
        this.query = query;
        url += '?searchString=' + query;
        this.http.get(url).subscribe((response: Array<SubmittedImage>) => {
          this.images = response;
          observable.next(this.images);
          observable.complete();
        });
      } else { //serve cached response
        observable.next(this.images);
        observable.complete();
      }

    });
    return q;           
  }
  getImage(id:number): Observable<SubmittedImage> {
    //GET image
    const q = new Observable<SubmittedImage>((observable) => {
      this.http.get(environment.resourceDirectory.base + id).subscribe((response: SubmittedImage) => {
        observable.next(response);
        this.updateImageInService(response);
        observable.complete();
      }, (err) => {
        observable.next(null);
        observable.complete();
      });
    });
    return q;             
  }  
  approveImage(img: SubmittedImage): SubmittedImage {   
    img.approvalStatus = this.APPROVAL_STATUS.approved;
    return img;
  }
  rejectImage(img: SubmittedImage): SubmittedImage {
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
  isImageRejected(img: SubmittedImage): boolean {
    return img.approvalStatus === this.APPROVAL_STATUS.rejected;
  }
  isImagePending(img: SubmittedImage): boolean {
    return img.approvalStatus === this.APPROVAL_STATUS.pending;
  }
  isQueryDifferent(q: string){
    return this.query !== q;
  }  
  updateImage(image: SubmittedImage): Observable<boolean> {
    //PUT decision
    const q = new Observable<boolean>((observable) => {
      let img: SubmittedImage = this.updateImageInService(image);
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
  getImagesInService() {
    return this.images;
  }

  /**
   * //TODO: unit test these
   */
  updateImageInService(updatedImage: SubmittedImage): SubmittedImage {
    let index: number = this.images.findIndex((img) => {
      return img.id === updatedImage.id;
    });
    if (index > -1)
      this.images.splice(index, 1, updatedImage); //remove old
    else
      this.images.push(updatedImage);

        
    return updatedImage;

  }
  findImageById(id: number): SubmittedImage {
    let index: number = this.images.findIndex((img) => {
      return img.id === id;
    });
    if (index > -1)
      return this.images[index];
    else
      return null;
  }
}

