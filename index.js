const mongoose = require('mongodb');

const express = require('express');
const app = express();
const cors = require("cors");

const { port, host } = require('./serverConfig.json');

const Job = require('./models/jobs');

const connectDB = require('./db/dbConnection');

connectDB();

app.use(cors());
app.use(express.json());


app.get("/api/v1/jobs", (req, res) => {
    console.log("getting jobs");
    Job.find()
  .then(jobs => {
    console.log(jobs);
    res.status(200).json(jobs);
  })
  .catch(err => {
    console.error(err);
    res.status(404)
  });
});
app.post("/api/v1/jobs", (req, res) => {
    console.log("adding jobs");
    const newJob = new Job(req.body);
    console.log("newJob: ",newJob );
      newJob.save();
      res.status(200);
});
app.get("/api/v1/jobs/:id", (req, res) => {
    console.log("finding one job");
    Job.findOneAndUpdate({ _id: '123' }, { job: 'Frontend Developer' })
  .then(job => {
    console.log(job);
  })
  .catch(err => {
    console.error(err);
  });
});
app.delete("/api/v1/jobs/:7", (req, res) => {
    Job.findOneAndDelete({ _id: '123' })
  .then(() => {
    console.log('Job deleted successfully');
  })
  .catch(err => {
    console.error(err);
  });
});


app.listen(port, () => {console.log(`Server is listening on port ${port}...`)});