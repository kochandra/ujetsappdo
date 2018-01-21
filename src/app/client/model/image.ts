/**
 * Image for submission.
 */
export class Image {
    id: string;
    data: string; //base64 encoded
    filename: string;
    constructor() {
        this.id = '';
        this.data ='';
        this.filename='';
    }
}