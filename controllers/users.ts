import { Request, Response } from "express";
import User from "../models/users";


export const getAllUsers = async (req: Request, res: Response) => {
    try {
      const allUser = await User.find();  
      res.status(200).json(allUser);
    } catch (err: any) {
      res.status(400).json({
        status: 400,
        message: err.message,
      });
    }
  };

export const addUser = async (req: Request, res: Response) => {
    try {
      const newUser = new User({
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
    } catch (err: any) {
      res.status(400).json({
        status: 400,
        message: err.message,
      });
    }
  };
  