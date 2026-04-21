import {apiRequest} from "./api.js"


async function getAppointments() {
    return ("/appointments", {
        method: "GET",
    });
}

async function createAppointments(payload) {
    return ("/appointments", {
        method: "POST",
        body: JSON.stringify(payload),
    })
}