import { Router } from "express";
import { getAllJobs, addJob, getJobById } from "../controllers/jobs";

const router = Router();

router.route("/").get(getAllJobs).post(addJob);

router.route("/:id").get(getJobById);

export default router as Router;
