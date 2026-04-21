import {apiRequest} from "./api.js"


async function getAppointments() {
    return ("/appointments", {
        method: "GET",
    });
}

async function createAppointment(payload) {
    return ("/appointments", {
        method: "POST",
        body: JSON.stringify(payload),
    })
}

async function cancelAppointment(appointmentId) {
    return (`/appointments/${appointmentId}/cancel`,{
        method: "PATCH",
    })
}

export {getAppointments, createAppointment, cancelAppointment}