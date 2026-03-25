import {Router} from "express";
import { loginUser, registerUser, getCurrentUser } from "../controllers/auth.controllers.js";

const router = Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(verifyJWT, getCurrentUser);

export default router;