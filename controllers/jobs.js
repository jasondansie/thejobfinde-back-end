"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllJobs = void 0;
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
