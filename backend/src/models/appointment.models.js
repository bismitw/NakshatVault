import mongoose, { Schema } from "mongoose";


const appointmentSchema = new Schema(
    {
        
    }
)

export const Appointment = mongoose.model("Appointment", appointmentSchema);