import {apiRequest} from "./api.js"


async function getAppointments() {
    return ("/appointments", {
        method: "GET",
    });
}