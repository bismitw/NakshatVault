import {Appointment} from "../models/appointment.models.js"
import {User} from "../models/user.models.js"
import {ApiError} from "../utils/apiError.utils.js"

const createAppointmentService = async (userId, appointmentData) => {
    if(!userId){
        throw new ApiError(400, "User id is required");
    }

    const {
        date,
        timeSlot,
        consultationType,
        mode,
    } = appointmentData;

    if( !date || !timeSlot ){
        throw new ApiError(400, "Date, and time slot are required")
    }

    const appointment = await Appointment.create({
        userId,
        expertName: process.env.DEFAULT_EXPERT_NAME,
        expertEmail: process.env.DEFAULT_EXPERT_EMAIL,
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

const getAppointmentByIdService = async (userId, appointmentId) => {
    if (!userId) {
        throw new ApiError(400, "User id is required");
    }

    if (!appointmentId) {
        throw new ApiError(400, "Appointment id is required");
    }

    const appointment = await Appointment.findOne({
        _id: appointmentId,
        userId,
    });

    if (!appointment) {
    throw new ApiError(404, "Appointment not found");
    }

    return appointment;
};


const cancelAppointmentService = async (userId, appointmentId) => {
    if (!userId) {
        throw new ApiError(400, "User id is required");
    }

    if (!appointmentId) {
        throw new ApiError(400, "Appointment id is required");
    }

    const appointment = await Appointment.findOneAndUpdate(
        {
        _id: appointmentId,
        userId,
        },
        {
        $set: {
            status: "Cancelled",
        },
        },
        {
        new: true,
        runValidators: true,
        },
    );

    if (!appointment) {
        throw new ApiError(404, "Appointment not found");
    }

    return appointment;
};

const updateAppointmentStatusService = async (appointmentId, status) => {
    if (!appointmentId) {
        throw new ApiError(400, "Appointment id is required");
    }

    if (!status) {
        throw new ApiError(400, "Status is required");
    }

    const allowedStatuses = ["Booked", "In Review", "Approved", "Cancelled"];

    if (!allowedStatuses.includes(status)) {
        throw new ApiError(400, "Invalid appointment status");
    }

    const appointment = await Appointment.findByIdAndUpdate(
        appointmentId,
        {
        $set: { status },
        },
        {
        new: true,
        runValidators: true,
        },
    );

    if (!appointment) {
        throw new ApiError(404, "Appointment not found");
    }

    return appointment;
};

const markAppointmentEmailSentService = async (appointmentId, field) => {
    if(!appointmentId){
        throw new ApiError(400,"Appointment id is required")
    }

    if(!field){
        throw new ApiError(400, "Field is required")
    }

    const allowedFields = ["emailSentToUser", "emailSentToAdmin"]

    if(!allowedFields.includes(field)){
        throw new ApiError(400, "Invalid email Flag field");
    }

    const appointment = await Appointment.findByIdAndUpdate(
        appointmentId, {
            $set: {
                [field]: true,
            },
        },
        {
            new: true,
        }
    );

    if(!appointment){
        throw new ApiError(404, "Appointment not found");
    }
    return appointment
}


const getAllAppointmentsService = async () => {
    const appointments = await Appointment.find()
        .populate("userId", "fullName email role")
        .sort({createdAt: -1});
    
    return appointments;
}

export {
    createAppointmentService, 
    getUserAppointmentsService,
    getAppointmentByIdService, 
    cancelAppointmentService, 
    updateAppointmentStatusService, 
    markAppointmentEmailSentService,
    getAllAppointmentsService
}