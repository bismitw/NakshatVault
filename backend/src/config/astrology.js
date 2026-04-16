import axios from "axios";

const astrologyApi = axios.create({
    baseURL: process.env.PROKERALA_BASE_URL || "https://api.prokerala.com/v2",
    timeout: 15000,
});

export { astrologyApi };
