"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.getAllUsers = void 0;
const users_1 = __importDefault(require("../models/users"));
const getAllUsers = async (req, res) => {
    try {
        const allUser = await users_1.default.find();
        res.status(200).json(allUser);
    }
    catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
};
exports.getAllUsers = getAllUsers;
const addUser = async (req, res) => {
    try {
        const newUser = new users_1.default({
            id: req.body.user.id,
            name: req.body.user.name,
            email: req.body.user.email,
            givenName: req.body.user.given_name,
            familyName: req.body.user.family_name,
            picture: req.body.user.picture,
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
