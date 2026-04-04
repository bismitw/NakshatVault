import { createAppointmentService, getUserAppointmentsService, getAppointmentByIdService, cancelAppointmentService } from "../services/appointment.services.js";
import { ApiResponse } from "../utils/apiResponse.utils.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";
import { sendAppointmentBookedEmail } from "../services/email.services.js";

const createAppointment = asyncHandler(async (req, res) => {
    const appointment = await createAppointmentService(req.user?._id, req.body);

    return res
    .status(201)
    .json(
        new ApiResponse(201, appointment, "Appointment created successfully"),
    );
});

const getUserAppointments = asyncHandler(async (req, res) => {
    const appointments = await getUserAppointmentsService(req.user?._id);

    return res
    .status(200)
    .json(
        new ApiResponse(200, appointments, "Appointments fetched successfully"),
    );
});

const getAppointmentById = asyncHandler(async (req, res) => {
    const appointment = await getAppointmentByIdService(
        req.user?._id,
        req.params.id,
    );

    return res
    .status(200)
    .json(new ApiResponse(200, appointment, "Appointment fetched successfully"),);
});

const cancelAppointment = asyncHandler(async (req, res) => {
    const appointment = await cancelAppointmentService(
        req.user?._id,
        req.params.id,
    );

    return res
    .status(200)
    .json(
    new ApiResponse(200, appointment, "Appointment cancelled successfully"),
    );
});


export { createAppointment, getUserAppointments, getAppointmentById, cancelAppointment };
