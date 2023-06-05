"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jobs_1 = require("../controllers/jobs");
const router = (0, express_1.Router)();
router.route("/").get(jobs_1.getAllJobs).post(jobs_1.addJob);
router.route("/:id").get(jobs_1.getJobById).post(jobs_1.modifyJob).delete(jobs_1.deleteJob);
exports.default = router;
