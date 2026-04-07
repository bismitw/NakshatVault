import { Router } from "express";
import { createAppointment, getUserAppointments, getAppointmentById, cancelAppointment, updateAppointmentStatus } from "../controllers/appointment.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import {verifyAdmin} from "../middlewares/admin.middlewares.js"
import { validateRequiredFields } from "../middlewares/validate.middlewares.js";
import { validateAppointmentInput, validateAppointmentStatusInput } from "../validators/appointment.validator.js";


const router = Router();

router
    .route("/")
    .post(verifyJWT,validateRequiredFields(["expertName", "date", "timeSlot"]), createAppointment)
    .get(verifyJWT, getUserAppointments);

router.route("/:id").get(verifyJWT, getAppointmentById)
router.route("/:id/cancel").patch(verifyJWT, cancelAppointment);

router
    .route("/:id/status")
    .patch(
    verifyJWT,
    verifyAdmin,
    validateRequiredFields(["status"]),
    updateAppointmentStatus,
    );

export default router;
