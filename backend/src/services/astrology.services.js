import axios from "axios" 
import { astrologyApi } from "../config/astrology.js"
import { ApiError } from "../utils/apiError.utils.js"

const normalizeDate = (dateOfBirth) => {
    if (dateOfBirth instanceof Date) {
        return dateOfBirth.toISOString().slice(0, 10);
    }

    return String(dateOfBirth).slice(0, 10);
};

const normalizeTime = (timeOfBirth) => {
    const value = String(timeOfBirth).trim();

    const twentyFourHourMatch = value.match(/^([01]?\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/);
    if (twentyFourHourMatch) {
        const hours = String(Number(twentyFourHourMatch[1])).padStart(2, "0");
        const minutes = twentyFourHourMatch[2];
        const seconds = twentyFourHourMatch[3] || ":00";
        return `${hours}:${minutes}${seconds}`;
    }

    const amPmMatch = value.match(/^(\d{1,2}):([0-5]\d)\s*(AM|PM)$/i);
    if (!amPmMatch) {
        return value;
    }

    let hours = Number(amPmMatch[1]);
    const minutes = amPmMatch[2];
    const meridiem = amPmMatch[3].toUpperCase();

    if (meridiem === "AM") {
        hours = hours === 12 ? 0 : hours;
    } else if (hours !== 12) {
        hours += 12;
    }

    return `${String(hours).padStart(2, "0")}:${minutes}:00`;
};


const getProkeralaAccessToken = async () => {
    try {
        const tokenResponse = await axios.post(
            "https://api.prokerala.com/token",

            new URLSearchParams({
                grant_type: "client_credentials",
                client_id: process.env.PROKERALA_CLIENT_ID,
                client_secret: process.env.PROKERALA_CLIENT_SECRET,
            }).toString(),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        return tokenResponse.data?.access_token;
    } catch (error) {
        console.error("Prokerala token error:", error.response?.data || error.message);
        throw new ApiError(500, "Failed to generate Prokerala access token");
    }
}

const fetchKundliDataFromProkerala = async ({
    dateOfBirth,
    timeOfBirth,
    latitude,
    longitude,
    timezone,
}) => {
    try {
        const accessToken = await getProkeralaAccessToken();
        const normalizedDateOfBirth = normalizeDate(dateOfBirth);
        const normalizedTimeOfBirth = normalizeTime(timeOfBirth);
        const datetime = `${normalizedDateOfBirth}T${normalizedTimeOfBirth}${timezone}`;

        const response = await astrologyApi.get("/astrology/birth-details",{
            headers:{
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                datetime,
                coordinates: `${latitude},${longitude}`,
                ayanamsa: 1,
            }
        })

        return response.data;
    } catch (error) {
        console.error("Prokerala kundli fetch error:", error.response?.data || error.message);
        throw new ApiError(error.response?.status || 500, error.response?.data?.message || "Failed to fetch kundli data from Prokerala")
    }

};

export { getProkeralaAccessToken, fetchKundliDataFromProkerala }