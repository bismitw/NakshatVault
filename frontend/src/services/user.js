import { apiRequest } from "./api.js";

async function getUserProfile() {
    return apiRequest("/user/profile", {
        method: "GET",
    });
}

