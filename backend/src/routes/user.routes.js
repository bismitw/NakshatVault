import { Router } from "express";
import { getUserProfile, updateBirthDetails, updateUserProfile } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/profile")
.get(verifyJWT, getUserProfile)
.patch(verifyJWT, updateUserProfile)


export default router;
