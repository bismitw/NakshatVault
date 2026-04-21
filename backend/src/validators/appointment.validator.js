import { ApiError } from "../utils/apiError.utils.js";

const allowedConsultationTypes = [
    "General",
    "Marriage",
    "Career",
    "Finance",
    "Health",
    "Other",
];

const allowedModes = ["Online", "Offline"];
const allowedStatuses = ["Booked", "In Review", "Approved", "Cancelled"];

const validateAppointmentInput = (req, res, next) => {

    const { date, timeSlot, consultationType, mode} = req.body;

    if(!date || !timeSlot){
        return next(
            new ApiError(400, " Date, and time slot are required")
        );
    }
    if (consultationType && !allowedConsultationTypes.includes(consultationType)) {
        return next(new ApiError(400, "Invalid consultation type"));
    }

    if (mode && !allowedModes.includes(mode)) {
        return next(new ApiError(400, "Invalid appointment mode"));
    }

    req.body.timeSlot = timeSlot.trim();

    if (req.body.expertEmail) {
        req.body.expertEmail = req.body.expertEmail.trim().toLowerCase();
    }

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