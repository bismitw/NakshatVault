import { Router } from "express";
import { getUserProfile } from "../controllers/user.controllers";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/Profile").get(verifyJWT, getUserProfile);

export default router;
