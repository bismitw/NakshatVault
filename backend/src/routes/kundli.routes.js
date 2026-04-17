import { Router } from "express";
import { createKundli, deleteKundli, getKundliById, getUserKundlis, updateKundli, generateKundli } from "../controllers/kundli.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { validateKundliInput } from "../validators/kundli.validator.js";

const router = Router();

router.route("/")
.post(verifyJWT, validateKundliInput,createKundli)
.get(verifyJWT, getUserKundlis)

router.route("/:id")
.get(verifyJWT, getKundliById)
.patch(verifyJWT, updateKundli)
.delete(verifyJWT, deleteKundli)


router.route("/generate")
.post(verifyJWT, generateKundli)
export default router;