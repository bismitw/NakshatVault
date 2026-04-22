import { ApiError } from "../utils/apiError.utils.js";
import {
    APPOINTMENT_CONSULTATION_TYPES,
    APPOINTMENT_MODES,
    APPOINTMENT_TIME_SLOTS
} from "../constants/appointment.constants.js"

const allowedStatuses = ["Booked", "In Review", "Approved", "Cancelled"];

const validateAppointmentInput = (req, res, next) => {

    const { date, timeSlot, consultationType, mode} = req.body;

    if(!date || !timeSlot){
        return next(
            new ApiError(400, "Date, and time slot are required")
        );
    }

    const selectedDate = new Date(`${date}T00:00:00`);
    if (Number.isNaN(selectedDate.getTime())) {
        return next(new ApiError(400, "Invalid appointment date"));
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        return next(new ApiError(400, "Appointment date cannot be in the past"));
    }

    const trimmedTimeSlot = timeSlot.trim();

    if (!APPOINTMENT_TIME_SLOTS.includes(trimmedTimeSlot)) {
        return next(new ApiError(400, "Invalid appointment time slot"));
    }


    if (consultationType && !APPOINTMENT_CONSULTATION_TYPES.includes(consultationType)) {
        return next(new ApiError(400, "Invalid consultation type"));
    }

    if (mode && !APPOINTMENT_MODES.includes(mode)) {
        return next(new ApiError(400, "Invalid appointment mode"));
    }

    req.body.timeSlot = trimmedTimeSlot;
    next();
}

const validateAppointmentStatusInput = (req, res, next) => {
    const {status} = req.body;
    if (!status) {
        return next(new ApiError(400, "Status is required"));
    }

    if (!allowedStatuses.includes(status)) {
        return next(new ApiError(400, "Invalid appointment status"));
    }
    next();

}

export { validateAppointmentInput, validateAppointmentStatusInput };