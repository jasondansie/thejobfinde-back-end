"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const users_1 = __importDefault(require("../models/users"));
const addUser = async (req, res) => {
    try {
        const newUser = new users_1.default({
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            givenName: req.body.givenName,
            familyName: req.body.familyName,
            picture: req.body.picture,
        });
        if (await newUser.save()) {
            res.status(200).json({
                status: 200,
                message: "User saved successfully" + newUser,
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
exports.addUser = addUser;
