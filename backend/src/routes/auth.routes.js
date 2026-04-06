import {Router} from "express";
import { loginUser, registerUser, getCurrentUser, logoutUser, refreshAccessToken } from "../controllers/auth.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { validateRequiredFields } from "../middlewares/validate.middlewares.js";
import { authRateLimiter } from "../middlewares/rateLimit.middlewares.js";
import { validateRegisterInput, validateLoginInput } from "../validators/auth.validator.js";

const router = Router();
router.route("/register")
.post(authRateLimiter,validateRequiredFields(["fullName", "email", "password"]),registerUser);

router.route("/login")
.post(authRateLimiter, validateRequiredFields(["email", "password"]),loginUser);

router.route("/me").get(verifyJWT, getCurrentUser);
router.route("/logout").post(verifyJWT, logoutUser);

router.route("/refresh-token")
.post(authRateLimiter, validateRequiredFields(["refreshToken"]), refreshAccessToken);

export default router;