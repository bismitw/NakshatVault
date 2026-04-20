import { apiRequest } from "./api.js"

async function getKundlis() {
    return apiRequest("/kundli", {
        method: "GET",
    })
}

async function getKundliById(kundliId) {
    return apiRequest(`/kundli/${kundliId}`, {
        method: "GET",
    })
}

async function generateKundli(payload) {
    return apiRequest("/kundli/generate", {
        method: "POST",
        body: JSON.stringify(payload),
    });
}

async function updateKundli(kundliId, payload) {
    return apiRequest(`/kundli/${kundliId}`, {
        method: "PATCH",
    })
}

export {getKundlis, generateKundli};