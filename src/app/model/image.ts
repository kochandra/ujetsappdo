export class Image {
    id: string;
    data: string; //base64 encoded
    filename: string;
    rejectionReason: string;
    isApproved: boolean;
    isPending: boolean;
}