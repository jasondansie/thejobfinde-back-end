import { Request, Response } from "express";
import Job from "../models/jobs";

export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const allJobs = await Job.find();
    res.status(200).json(allJobs);
  } catch (err: any) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
}

  