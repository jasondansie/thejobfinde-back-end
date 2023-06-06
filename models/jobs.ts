import mongoose, { Document, Model, Schema  } from 'mongoose';

export interface IJob extends Document {
  company: string;
  companyWebSite?: string;
  applicationLink: string;
  Position: string;
  jobDescription: string;
  dateApplied?: string;
  response?: string;
  reasonToWork?: string;
  recruiterName?: string;
  recruiterPosition?: string;
  applied: boolean;
}

const jobSchema: Schema<IJob> = new Schema<IJob>({
  company: {
    type: String,
    required: true,
  },
  companyWebSite: {
    type: String,
    required: false,
  },
  applicationLink: {
    type: String,
    required: true,
  },
  Position: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  dateApplied: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
  reasonToWork: {
    type: String,
    required: false,
  },
  recruiterName: {
    type: String,
    required: false,
  },
  recruiterPosition: {
    type: String,
    required: false,
  },
  applied: {
    type: Boolean,
    required: true,
  },
});


const Job: Model<IJob> = mongoose.model<IJob>('Job', jobSchema);

export default Job;