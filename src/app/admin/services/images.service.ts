import { Injectable } from '@angular/core';
import { SubmittedImage } from '../model/submittedImage';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const MOCK: Array<SubmittedImage> = [
  {
    filename: 'aaa.jpg',
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
    id: 8,
    emailStatus: 'Sent',
    approvalStatus: 'Pending',
    approvalDecisionNotes: '',
    uploadedDate: '01/21/2018',
    imageLink: "https://s3.amazonaws.com/ImageUploadTest/Testing_1",
    uniqueCode: 'ex-asdfasf-xffasasdx'
  },
  {
    filename: 'kkkk.jpg',
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
  constructor() {
    this.images = MOCK;
   }

  getImages(): Observable<Array<SubmittedImage>> {
    if (this.images.length > 0) {
      return of(this.images);
    } else {
      //TODO: get the images    
      return [] as any;
    }
  }
  approveImage(img: SubmittedImage) {
    img.approvalStatus = this.APPROVAL_STATUS.approved;
    //TODO: POST decision
  }
  rejectImage(img: SubmittedImage) {
    img.approvalStatus = this.APPROVAL_STATUS.rejected;
    //TODO: POST decision
  }
  
  markImageAsPending(img: SubmittedImage) {
    img.approvalStatus = this.APPROVAL_STATUS.pending;
  }
  isImageApproved(img: SubmittedImage) {
    return img.approvalStatus === this.APPROVAL_STATUS.approved;
  }
  isImagePending(img: SubmittedImage) {
    return img.approvalStatus === this.APPROVAL_STATUS.pending;
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

