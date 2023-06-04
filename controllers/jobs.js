"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuestion = exports.addJob = exports.getJobById = exports.getAllJobs = void 0;
const jobs_1 = __importDefault(require("../models/jobs"));
const getAllJobs = async (req, res) => {
    try {
        const allJobs = await jobs_1.default.find();
        res.status(200).json(allJobs);
    }
    catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
};
exports.getAllJobs = getAllJobs;
// Get a single job by ID
const getJobById = async (req, res) => {
    const jobId = req.params.id;
    try {
        const job = await jobs_1.default.findById(jobId);
        if (!job) {
            return res.status(404).json({ error: 'Job not found' });
        }
        res.status(200).json(job);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getJobById = getJobById;
const addJob = async (req, res) => {
    try {
        const newJob = new jobs_1.default({
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
    }
    catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
};
exports.addJob = addJob;
const deleteQuestion = async (req, res) => {
    res.send("delete Question");
};
exports.deleteQuestion = deleteQuestion;
