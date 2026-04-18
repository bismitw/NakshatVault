import { Router } from "express";
import { createKundli, deleteKundli, getKundliById, getUserKundlis, updateKundli, generateKundli } from "../controllers/kundli.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { validateKundliInput, validateGeneratedKundliInput } from "../validators/kundli.validator.js";

const router = Router();

router.route("/")
.post(verifyJWT, validateKundliInput,createKundli)
.get(verifyJWT, getUserKundlis)

router.route("/generate").post(verifyJWT,validateGeneratedKundliInput, generateKundli);

router.route("/:id")
.get(verifyJWT, getKundliById)
.patch(verifyJWT, updateKundli)
.delete(verifyJWT, deleteKundli)



export default router;