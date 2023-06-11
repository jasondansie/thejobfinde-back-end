import { Request, Response } from "express";
import Job from "../models/jobs";
import IJob from "../types/IJobs";

export const getAllJobs = async (req: Request, res: Response) => {
  try {
    console.log("getting all Jobs");
    const allJobs = await Job.find();
    console.log("all Jobs found");

    res.status(200).json(allJobs);
  } catch (err: any) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
};

// Get a single job by ID
export const getJobById = async (req: Request, res: Response) => {
  const jobId = req.params.id;
  console.log("id", jobId);

  try {
    const job: IJob | null = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const addJob = async (req: Request, res: Response) => {
  try {
    const newJob = new Job({
      company: req.body.company,
      companyWebSite: req.body.companyWebSite,
      applicationLink: req.body.applicationLink,
      Position: req.body.Position,
      jobDescription: req.body.jobDescription,
      dateApplied: req.body.dateApplied,
      response: req.body.response,
      reasonToWork: req.body.reasonToWork,
      recruiterName: req.body.recruiterName,
      recruiterPosition: req.body.recruiterPosition,
      category: req.body.category,
      applied: req.body.applied,
   });

    if (await newJob.save()) {
      res.status(200).json({
        status: 200,
        message: "Job saved successfully" + newJob,
      });
    } 
  } catch (err: any) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
};

export const deleteQuestion = async (req: Request, res: Response) => {
  res.send("delete Question");
};
