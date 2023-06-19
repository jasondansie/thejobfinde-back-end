import { Router } from "express";
import { addUser, getAllUsers } from "../controllers/users";


const router = Router();

router.route("/").get(getAllUsers).post(addUser);

export default router as Router;
