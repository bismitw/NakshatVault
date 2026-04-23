import { Router } from "express";
import { getUserProfile, updateBirthDetails, updateUserProfile } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { validateBirthDetailsInput, validateUserProfileInput } from "../validators/user.validator.js";

const router = Router();

router.route("/profile")
.get(verifyJWT, getUserProfile)
.patch(verifyJWT, validateUserProfileInput, updateUserProfile)

router.route("/birth-details").patch(verifyJWT, validateBirthDetailsInput, updateBirthDetails);

export default router;
