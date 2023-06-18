import { Router } from "express";
import router from "./jobs";
import { addUser } from "../controllers/users";



const route = Router;

router.route("/").post(addUser);