import mongoose, { Schema } from "mongoose";


const appointmentSchema = new Schema(
    {
        //Link to the user who booked
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        //Expert Info
        expertName: {
            type: String,
            required: true,
            trim: true,
        },
        expertEmail: {
            type: String,
            trim: true,
            lowercase: true,
        },

         // Date & time slot
        date: {
            type: Date,
            required: true,
        },
        timeSlot: {
            type: String,
            required: true,
            trim: true,
        },
        consultationType: {
            type: String,
            enum: ["General", "Marriage", "Career", "Finance", "Health", "Other"],
            default: "General",
        },

        //Status flow
        status: {
            type: String,
            enum: ["Booked", "In Review", "Approved", "Cancelled"],
            default: "Booked"
        },
        mode: {
            type: String,
            enum: ["Online", "Offline"],
            Default: "Online",
        },

        //track if Email Sent to User
        emailSentToUser: {
            type: Boolean,
            default: false,
        },
        emailSentToAdmin: {
            type: Boolean,
            default: false,
        },

    },
    { timestamps: true }
)

export const Appointment = mongoose.model("Appointment", appointmentSchema);