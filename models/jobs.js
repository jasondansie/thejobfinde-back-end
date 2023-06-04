"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const jobSchema = new mongoose_1.default.Schema({
    company: {
        type: String,
        required: true,
    },
    companyWebSite: {
        type: String,
        required: false,
    },
    applicationLink: {
        type: String,
        required: true,
    },
    Position: {
        type: String,
        required: true,
    },
    jobDescription: {
        type: String,
        required: true,
    },
    dateApplied: {
        type: String,
        required: true,
    },
    response: {
        type: String,
        required: true,
    },
    reasonToWork: {
        type: String,
        required: false,
    },
    recruiterName: {
        type: String,
        required: false,
    },
    recruiterPosition: {
        type: String,
        required: false,
    },
    applied: {
        type: Boolean,
        required: true,
    },
});
const Job = mongoose_1.default.model('Job', jobSchema);
exports.default = Job;
