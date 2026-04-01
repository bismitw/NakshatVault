import { Router } from "express";
import { createAppointment, getUserAppointments } from "../controllers/appointment.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router
    .route("/")
    .post(verifyJWT, createAppointment)
    .get(verifyJWT, getUserAppointments);

export default router;
