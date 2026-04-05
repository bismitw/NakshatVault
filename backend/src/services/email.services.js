    import { resend } from "../config/email.js";

    const sendAppointmentBookedEmail = async ({
        to,
        fullName,
        expertName,
        date,
        timeSlot,
        consultationType,
        mode,
    }) => {
    if (!to) {
        return null;
    }

    const response = await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to,
        subject: "Appointment Booking Confirmation",
        html: `
        <h2>Appointment Confirmed</h2>
        <p>Hello ${fullName || "User"},</p>
        <p>Your appointment has been booked successfully.</p>
        <p><strong>Expert:</strong> ${expertName}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time Slot:</strong> ${timeSlot}</p>
        <p><strong>Consultation Type:</strong> ${consultationType}</p>
        <p><strong>Mode:</strong> ${mode}</p>
        <p>Thank you for using NakshatVault.</p>
    `,
    });

    return response;
    };

    const sendAppointmentCancelledEmail = async({
        to, 
        fullName,
        expertName,
        date,
        timeSlot,
        consultationType,
        mode,
    })=> {
    if(!to){
        return null
    }
    const response = await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to,
        subject: "Appointment Cancellation Confirmation",
        html: `
        <h2>Appointment Cancelled</h2>
        <p>Hello ${fullName || "User"},</p>
        <p>Your appointment has been cancelled successfully.</p>
        <p><strong>Expert:</strong> ${expertName}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time Slot:</strong> ${timeSlot}</p>
        <p><strong>Consultation Type:</strong> ${consultationType}</p>
        <p><strong>Mode:</strong> ${mode}</p>
        <p>If this was a mistake, please book again through NakshatVault.</p>
    `,
    });

    return response;
    }   


    export { sendAppointmentBookedEmail };
