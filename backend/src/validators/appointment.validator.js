import { ApiError } from "../utils/apiError.utils.js";

const allowedConsultationTypes = [
    "General",
    "Marriage",
    "Career",
    "Finance",
    "Health",
    "Other",
];

const allowedModes = ["Online", "Offline"];
const allowedStatuses = ["Booked", "In Review", "Approved", "Cancelled"];