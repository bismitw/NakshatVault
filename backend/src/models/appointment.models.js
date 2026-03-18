import mongoose, { Schema } from "mongoose";


const appointmentSchema = new Schema(
    {
        //Link to the user who booked
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
        
    }
)

export const Appointment = mongoose.model("Appointment", appointmentSchema);