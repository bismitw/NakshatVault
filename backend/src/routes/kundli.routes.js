import { Router } from "express";
import { createKundli, deleteKundli, getKundliById, getUserKundlis, updateKundli } from "../controllers/kundli.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { validateRequiredFields } from "../middlewares/validate.middlewares.js";

const router = Router();

router.route("/")
.post(verifyJWT, validateRequiredFields(["dateOfBirth", "timeOfBirth", "placeOfBirth"]),createKundli)
.get(verifyJWT, getUserKundlis)

router.route("/:id")
.get(verifyJWT, getKundliById)
.patch(verifyJWT, updateKundli)
.delete(verifyJWT, deleteKundli)

export default router;