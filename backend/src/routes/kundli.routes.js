import { Router } from "express";
import { createKundli, getKundliById, getUserKundlis } from "../controllers/kundli.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/")
.post(verifyJWT, createKundli)
.get(verifyJWT, getUserKundlis)

router.route("/:id").get(verifyJWT, getKundliById);

export default router;