/**
 * Image for submission.
 */
export class Image {
    data: string; //base64 encoded
    id: string;
    filename: string;
    constructor() {
        this.data ='';
        this.id = '';        
        this.filename='';
    }
}