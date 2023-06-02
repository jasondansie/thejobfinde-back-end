const mongoose = require('mongoose');
console.log("loading model");
const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  companyWebSite: {
    type: String,
    required: false
  },
  applicationLink: {
    type: String,
    required: true
  },
  Position: {
    type: String,
    required: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  dateApplied: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  },
  reasonToWork: {
    type: String,
    required: false
  },
  recruiterName: {
    type: String,
    required: false
  },
  recruiterPosition: {
    type: String,
    required: false
  },
  applied: {
    type: Boolean,
    required: true
  }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;