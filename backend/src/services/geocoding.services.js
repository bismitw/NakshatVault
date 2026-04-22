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

    } catch (error) {
        
    }
}