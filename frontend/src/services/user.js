import { apiRequest } from "./api.js";

async function getUserProfile() {
    return apiRequest("/users/profile", {
        method: "GET",
    });
}

async function updateUserProfile(payload){
    return apiRequest("/users/profile", {
        method: "PATCH",
        body: JSON.stringify(payload),
    });
}

async function updateBirthDetails(payload) {
    return apiRequest("/users/birth-details", {
        method: "PATCH",
        body: JSON.stringify(payload),
    })
}

export { getUserProfile, updateUserProfile, updateBirthDetails };