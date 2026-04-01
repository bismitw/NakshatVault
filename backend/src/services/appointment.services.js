import {Appointment} from "../models/appointment.models.js"
import {User} from "../models/user.models.js"
import {ApiError} from "../utils/apiError.utils.js"

const createAppointmentService = async (userId, appointmentData) => {
    if(!userId){
        throw new ApiError(400, "User id is required");
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

    const appointment = await Appointment.create({
        userId,
        expertName: expertName.trim(),
        expertEmail: expertEmail?.trim().toLowerCase() || "",
        date,
        timeSlot: timeSlot.trim(),
        consultationType: consultationType || "General",
        mode: mode || "Online"
    });

    await User.findByIdAndUpdate(userId, {
        $push: {
            appointments: appointment._id,
        },

    })
    return appointment;
}

const getUserAppointmentsService = async (userId) => {
    if (!userId) {
    throw new ApiError(400, "User id is required");
    }

    const appointments = await Appointment.find({ userId }).sort({
    createdAt: -1,
    });

    return appointments;
};

export {createAppointmentService, getUserAppointmentsService}