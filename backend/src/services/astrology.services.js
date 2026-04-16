import axios from "axios" 
import { astrologyApi } from "../config/astrology.js"
import { ApiError } from "../utils/apiError.utils.js"


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
                    "Content_Type": "application/x-www-form-urlencoded",
                },
            }
        );

        return tokenResponse.data?.access_token;
    } catch (error) {
        throw new ApiError(500, "Failed to generate Prokerala access token");
    }
}

export { getProkeralaAccessToken }