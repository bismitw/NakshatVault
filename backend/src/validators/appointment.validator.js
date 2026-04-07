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

    const {expertName, date, timeSlot, consultationType, mode} = req.body;

    if(!expertName || !date ||timeSlot){
        return next(
            new ApiError(400, "Expert name, date, and time slot are required")
        );
    }
}