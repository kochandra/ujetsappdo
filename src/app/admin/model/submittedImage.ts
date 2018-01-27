/**
 * This is the submitted image which comes back from the DB.
 */
export class SubmittedImage {
    imageLink: string;
    uniqueCode: string;
    filename: string;
    name: string;
    approvalStatus: string; //Possible values : ["Pending", "Approved", "Rejected"]
    approvalDecisionNotes: string;
    uploadedDate: string;

    id: number;
    emailStatus: string;
    address: string;
    dateOfBirth: string;
}