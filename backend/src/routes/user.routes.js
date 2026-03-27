import { Router } from "express";
import { getUserProfile } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/profile").get(verifyJWT, getUserProfile);

export default router;
