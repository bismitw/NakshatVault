import {apiRequest} from "./api.js"


async function getAppointments() {
    return apiRequest("/appointments", {
        method: "GET",
    });
}

async function getAllAppointments() {
    return apiRequest("/appointments/admin/all", {
        method: "GET",
    });
}

async function getAppointmentOptions() {
    return apiRequest("/appointments/options", {
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

async function updateAppointmentStatus(appointmentId, status) {
    return apiRequest(`/appointments/${appointmentId}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
    });
}

export {getAppointments, getAllAppointments, getAppointmentOptions, createAppointment, cancelAppointment, updateAppointmentStatus}
