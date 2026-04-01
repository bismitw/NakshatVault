import { Router } from "express";
import { createAppointment } from "../controllers/appointment.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/").post(verifyJWT, createAppointment);

export default router;
