import { Router } from "express";
import { createAppointment, getUserAppointments, getAppointmentById, cancelAppointment, updateAppointmentStatus, getAllAppointments, getAppointmentOptions } from "../controllers/appointment.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import {verifyAdmin} from "../middlewares/admin.middlewares.js"
import { validateAppointmentInput, validateAppointmentStatusInput } from "../validators/appointment.validator.js";


const router = Router();

router
    .route("/")
    .post(verifyJWT,validateAppointmentInput, createAppointment)
    .get(verifyJWT, getUserAppointments);


router.route("/options").get(getAppointmentOptions);

router.route("/admin/all").get(verifyJWT, verifyAdmin, getAllAppointments);
router.route("/:id").get(verifyJWT, getAppointmentById)
router.route("/:id/cancel").patch(verifyJWT, cancelAppointment);

router
    .route("/:id/status")
    .patch(
    verifyJWT,
    verifyAdmin,
    validateAppointmentStatusInput,
    updateAppointmentStatus,
    );


export default router;
