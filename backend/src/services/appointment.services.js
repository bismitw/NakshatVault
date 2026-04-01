import {Appointment} from "../models/appointment.models.js"
import {User} from "../models/user.models.js"
import {ApiError} from "../utils/apiError.utils.js"

const createAppointmentService = async (userId, appointmentData) => {
    if(!userId){
        throw new ApiError(400, "UserId is required");
    }

    const {
        expertName,
        expertEmail,
        date,
        timeSlot,
        consultationType,
        mode,
    } = appointmentData;

    if(!expertName || !date || !timeSlot ){
        throw new ApiError(400, "Expert name, date, and time slot are required")
    }
}