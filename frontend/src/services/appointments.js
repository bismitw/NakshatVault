import {apiRequest} from "./api.js"


async function getAppointments() {
    return apiRequest("/appointments", {
        method: "GET",
    });
}

async function createAppointment(payload) {
    return apiRequest("/appointments", {
        method: "POST",
        body: JSON.stringify(payload),
    })
}

async function cancelAppointment(appointmentId) {
    return apiRequest(`/appointments/${appointmentId}/cancel`,{
        method: "PATCH",
    })
}

export {getAppointments, createAppointment, cancelAppointment}