import axios from "axios";
import { ApiError } from "../utils/apiError.utils.js";


const getLocationDataFromPlace = async (placeOfBirth) => {
    try {
        
        const response = await axios.get("https://api.geoapify.com/v1/geocode/search", {
            params: {
                text: placeOfBirth,
                format: "json",
                apiKey: process.env.GEOAPIFY_API_KEY,
            },
        });

        const result = response.data?.results?.[0];

        if(!result) {
            throw new ApiError(404, "Unable to resolve place of Birth");
        }

        const latitude = result.lat;
        const longitude = result.lon;

        const timeZoneOffset = result.timezone?.offset_STD || result.timezone?.offset_DST;

        if(!latitude || !longitude || !timeZoneOffset){
                throw new ApiError(400, "Incomplete location data returned from geocoding service");
        }

        return {
            latitude: String(latitude),
            longitude: String(longitude),
            timezone: timeZoneOffset,
            formattedAddress: result.formatted || placeOfBirth,
            raw: result,
        };
    } catch (error) {

        if(error instanceof ApiError){
            throw error
        }

        throw new ApiError(500, "Failed to geocode place of birth");
    }
}

export {getLocationDataFromPlace}