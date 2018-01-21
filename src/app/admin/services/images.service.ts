import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { SubmittedImage } from '../model/submittedImage';

const MOCK: Array<SubmittedImage> = [
  {
    filename: 'aaa.jpg',
    name: 'aaa',    
    id: 0,
    emailStatus: 'Sent',
    approvalStatus: 'Rejected',
    approvalDecisionNotes: 'I did not have my coffee yet.',
    uploadedDate: '01/21/2018',
    imageLink: "https://s3.amazonaws.com/ImageUploadTest/Testing_1",
    uniqueCode: 'xx-xx-xx'
  },
  {
    filename: 'bbb.jpg',
    name: 'bbb',    
    id: 1,
    emailStatus: 'Sent',
    approvalStatus: 'Pending',
    approvalDecisionNotes: '',
    uploadedDate: '01/21/2018',
    imageLink: "",
    uniqueCode: 'xx-dx-xx'
  },
  {
    filename: 'ccc.jpg',
    name: 'ccc',    
    id: 2,
    emailStatus: 'Sent',
    approvalStatus: 'Approved',
    approvalDecisionNotes: '',
    uploadedDate: '01/21/2018',
    imageLink: "https://s3.amazonaws.com/ImageUploadTest/Testing_1",
    uniqueCode: 'xx-xf-xx'
  },
  {
    filename: 'ddd.jpg',
    name: 'ddd',    
    id: 3,
    emailStatus: 'Sent',
    approvalStatus: 'Approved',
    approvalDecisionNotes: '',
    uploadedDate: '01/21/2018',
    imageLink: "https://s3.amazonaws.com/ImageUploadTest/Testing_1",
    uniqueCode: 'ex-xf-xx'
  },
  {
    filename: 'eee.jpg',
    name: 'eee',    
    id: 4,
    emailStatus: 'Sent',
    approvalStatus: 'Pending',
    approvalDecisionNotes: '',
    uploadedDate: '01/21/2018',
    imageLink: "https://s3.amazonaws.com/ImageUploadTest/Testing_1",
    uniqueCode: 'ex-xf-xffx'
  },
  {
    filename: 'fff.jpg',
    name: 'fff',    
    id: 5,
    emailStatus: 'Sent',
    approvalStatus: 'Rejected',
    approvalDecisionNotes: 'I did not have my coffee yet.',
    uploadedDate: '01/21/2018',
    imageLink: "https://s3.amazonaws.com/ImageUploadTest/Testing_1",
    uniqueCode: 'ex-xf-xffasx'
  },
  {
    filename: 'ggg.jpg',
    name: 'ggg',    
    id: 6,
    emailStatus: 'Sent',
    approvalStatus: 'Pending',
    approvalDecisionNotes: '',
    uploadedDate: '01/21/2018',
    imageLink: "",
    uniqueCode: 'ex-xf-xffasasdx'
  },
  {
    filename: 'hhh.jpg',
    name: 'hhh',    
    id: 7,
    emailStatus: 'Sent',
    approvalStatus: 'Approved',
    approvalDecisionNotes: '',
    uploadedDate: '01/21/2018',
    imageLink: "https://s3.amazonaws.com/ImageUploadTest/Testing_1",
    uniqueCode: 'ex-xf-xffasasdfasdx'
  },
  {
    filename: 'iii.jpg',
    name: 'iii',    
    id: 8,
    emailStatus: 'Sent',
    approvalStatus: 'Pending',
    approvalDecisionNotes: '',
    uploadedDate: '01/21/2018',
    imageLink: "https://s3.amazonaws.com/ImageUploadTest/Testing_1",
    uniqueCode: 'ex-asdfasf-xffasasdx'
  },
  {
    filename: 'zzzz.jpg',
    name: 'zzzz',    
    id: 9,
    emailStatus: 'Sent',
    approvalStatus: 'Rejected',
    approvalDecisionNotes: 'I did not have my coffee yet.',
    uploadedDate: '01/21/2018',
    imageLink: "https://s3.amazonaws.com/ImageUploadTest/Testing_1",
    uniqueCode: 'asdfasdf-asdfasf-xffasasdx'
  }
];

@Injectable()
export class ImagesService {
  private images: Array<SubmittedImage> = [];
  private APPROVAL_STATUS = {
    approved: 'Approved',
    rejected: 'Rejected',
    pending: 'Pending'
  };
  constructor(private http: Http) {
    this.images = MOCK;
  }

  getImages(): Observable<Array<SubmittedImage>> {
    if (this.images.length > 0) {
      return of(this.images);
    } else {
      //TODO: get the images    
      const q = new Observable<Array<SubmittedImage>>((observable) => {
        this.http.get(environment.resourceDirectory.base + '/' + environment.resourceDirectory.image).subscribe((response: Response) => {  
          this.images = response.json() as Array<SubmittedImage>;
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
  updateImageByUniqueCode(code: string, img: SubmittedImage): Observable<boolean> {
    //TODO: PUT decision
    /*
    const q = new Observable<boolean>((observable) => {
      this.http.put(environment.resourceDirectory.base + '/' + environment.resourceDirectory.image + '/' + img.id, img).subscribe((response: Response) => {        
        observable.next(response.ok);
        observable.complete();
      });
    });
    return q;       
    */
    let index: number = this.images.findIndex((img) => {
      return img.uniqueCode === code;
    });
    if (index > -1) {
      this.images[index] = img;
      return of(true);
    } else {
      return of(false)
    }
  }
  /**
   * //TODO: unit test this
   */
  getImageByUniqueCode(code: string): SubmittedImage {
    let index: number = this.images.findIndex((img) => {
      return img.uniqueCode === code;
    });
    if (index > -1)
      return this.images[index];
    else
      return new SubmittedImage();
  }
}

