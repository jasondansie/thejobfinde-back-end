import mongoose, { Document, Model, Schema  } from 'mongoose';

export interface IJob extends Document {
  company: string;
  companyWebSite?: string;
  applicationLink: string;
  Position: string;
  notes: string;
  jobDescription: string;
  dateApplied?: string;
  response?: string;
  reasonToWork?: string;
  recruiterName?: string;
  recruiterEmail?: string;
  recruiterPhonenumber?: string;
  recruiterPosition?: string;
  applied: boolean;
  userId: String;
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
  notes: {
    type: String,
    required: false,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  dateApplied: {
    type: String,
    required: false,
  },
  response: {
    type: String,
    required: false,
  },
  reasonToWork: {
    type: String,
    required: false,
  },
  recruiterName: {
    type: String,
    required: false,
  },
  recruiterEmail: {
    type: String,
    required: false,
  },
  recruiterPhonenumber: {
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
  userId: {
    type: String,
    required: true,
  },
});


const Job: Model<IJob> = mongoose.model<IJob>('Job', jobSchema);

export default Job;