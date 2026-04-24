import { Router } from "express";
import { getAllUsers, getUserProfile, updateBirthDetails, updateUserProfile } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { verifyAdmin } from "../middlewares/admin.middlewares.js";
import { validateBirthDetailsInput, validateUserProfileInput } from "../validators/user.validator.js";

const router = Router();

router.route("/profile")
.get(verifyJWT, getUserProfile)
.patch(verifyJWT, validateUserProfileInput, updateUserProfile)

router.route("/birth-details").patch(verifyJWT, validateBirthDetailsInput, updateBirthDetails);

router.route("/admin/all").get(verifyJWT, verifyAdmin, getAllUsers);

export default router;
