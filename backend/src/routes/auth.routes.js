import {Router} from "express";
import { loginUser, registerUser, getCurrentUser, logoutUser } from "../controllers/auth.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { logoutUserService } from "../services/auth.services.js";

const router = Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(verifyJWT, getCurrentUser);
router.route("/logout").post(verifyJWT, logoutUser);

export default router;