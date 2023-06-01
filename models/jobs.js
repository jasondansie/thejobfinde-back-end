const mongoose = require('mongoose');
console.log("loading model");
const jobSchema = new mongoose.Schema({
  job: {
    type: String,
    required: true
  },
  joblink: {
    type: String,
    required: true
  }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;