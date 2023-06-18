"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jobs_1 = __importDefault(require("./jobs"));
const users_1 = require("../controllers/users");
const route = express_1.Router;
jobs_1.default.route("/").post(users_1.addUser);
