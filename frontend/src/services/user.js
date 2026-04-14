import { apiRequest } from "./api.js";

async function getUserProfile() {
    return apiRequest("/user/profile", {
        method: "GET",
    });
}

async function updateUserProfile(){
    return apiRequest("users/profile", {
        method: "PATCH",
        body: JSON.stringify(payload),
    });
}