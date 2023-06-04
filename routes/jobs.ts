import { Router } from "express";
import { getAllJobs, addJob } from "../controllers/jobs";

const router = Router();

router.route("/").get(getAllJobs).post(addJob);

export default router as Router;
