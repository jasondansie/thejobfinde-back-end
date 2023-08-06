import { Router } from "express";
import { getAllJobs, addJob, getJobById, modifyJob, deleteJob } from "../controllers/jobs";

const router = Router();

router.route("/").get(getAllJobs).post(addJob).delete(deleteJob);

router.route("/:id").get(getJobById).post(modifyJob).delete(deleteJob);

export default router as Router;
