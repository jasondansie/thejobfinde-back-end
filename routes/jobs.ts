import { Router } from "express";
import { getAllJobs } from "../controllers/jobs";

const router = Router();

router.route("/").get(getAllJobs);

export default router as Router;
