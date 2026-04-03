import { Router } from "express";
import { createAppointment, getUserAppointments, getAppointmentById, cancelAppointment } from "../controllers/appointment.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { validateRequiredFields } from "../middlewares/validate.middlewares.js";

const router = Router();

router
    .route("/")
    .post(verifyJWT, createAppointment)
    .get(verifyJWT, getUserAppointments);

router.route("/:id").get(verifyJWT, getAppointmentById)
router.route("/:id/cancel").patch(verifyJWT, cancelAppointment)

export default router;
