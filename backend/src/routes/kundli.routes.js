import { Router } from "express";
import { createKundli, getUserKundlis } from "../controllers/kundli.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/")
.post(verifyJWT, createKundli)
.get(verifyJWT, getUserKundlis)

export default router;