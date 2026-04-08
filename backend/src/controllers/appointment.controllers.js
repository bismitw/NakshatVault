import { createAppointmentService, getUserAppointmentsService, getAppointmentByIdService, cancelAppointmentService, updateAppointmentStatusService, markAppointmentEmailSentService, getAllAppointmentsService } from "../services/appointment.services.js";
import { ApiResponse } from "../utils/apiResponse.utils.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";
import { sendAppointmentBookedEmail, sendAppointmentCancelledEmail, sendAppointmentRequestToAdmin } from "../services/email.services.js";

const createAppointment = asyncHandler(async (req, res) => {
    const appointment = await createAppointmentService(req.user?._id, req.body);

    try {
        await sendAppointmentBookedEmail({
            to: req.user?.email,
            fullName: req.user?.fullName,
            expertName: appointment.expertName,
            date: appointment.date,
            timeSlot: appointment.timeSlot,
            consultationType: appointment.consultationType,
            mode: appointment.mode,
        });
        await markAppointmentEmailSentService(appointment._id, "emailSentToUser");
    } catch (error) {
        console.error("Appointment booking email failed:", error.message);
        
    }

    try {
        await sendAppointmentRequestToAdmin({
            to: process.env.ADMIN_EMAIL,
            userFullName: req.user?.fullName,
            userEmail: req.user?.email,
            expertName: appointment.expertName,
            date: appointment.date,
            timeSlot: appointment.timeSlot,
            consultationType: appointment.consultationType,
            mode: appointment.mode,
        });
        await markAppointmentEmailSentService(appointment._id, "emailSentToAdmin");
    } catch (error) {
        console.error("Admin appointment email failed:", error.message);
    };
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
    try { 
        await sendAppointmentCancelledEmail({
            to: req.user?.email,
            fullName: req.user?.fullName,
            expertName: appointment.expertName,
            date: appointment.date,
            timeSlot: appointment.timeSlot,
            consultationType: appointment.consultationType,
            mode: appointment.mode,
        });
        await markAppointmentEmailSentService(appointment._id, "emailSentToUser");
    } catch (error) {
        console.error("Appointment cancellation email failed:", error.message);
    }

    return res
    .status(200)
    .json(
    new ApiResponse(200, appointment, "Appointment cancelled successfully"),
    );
});

const updateAppointmentStatus = asyncHandler(async (req, res) => {
    const appointment = await updateAppointmentStatusService(
    req.params.id,
    req.body?.status,
    );

    return res
    .status(200)
    .json(
        new ApiResponse(
        200,
        appointment,
        "Appointment status updated successfully",
        ),
    );
});

const getAllAppointments = asyncHandler(async (req, res) => {
    const appointments = await getAllAppointmentsService();
    return res
    .status(200)
    .json(new ApiResponse(200,appointments,"All appointments fetched successfully"));
})



export { createAppointment, getUserAppointments, getAppointmentById, cancelAppointment, updateAppointmentStatus, getAllAppointments };
