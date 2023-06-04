import { Document } from "mongoose";

interface IJob extends Document {
  company: string;
  companyWebSite?: string;
  applicationLink: string;
  Position: string;
  jobDescription: string;
  dateApplied: string;
  response: string;
  reasonToWork?: string;
  recruiterName?: string;
  recruiterPosition?: string;
  applied: boolean;
}

export default IJob;
