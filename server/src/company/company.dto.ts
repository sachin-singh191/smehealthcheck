
export interface CompanyDto {
    id: number;
    companyName: string;
    companyUEN: string;
    applicantEmail: string;
    applicantPhoneNumber: string;
    position: string;
    termsAccepted: boolean;
    documentURLs: string[];
    createdAt: Date;
    updatedAt: Date;
  }