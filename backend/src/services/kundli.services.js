import {Kundli} from "../models/kundli.models.js"
import {User} from "../models/user.models.js"
import { ApiError } from "../utils/apiError.utils.js"

const createKundliService = async ( userId, kundliData ) => {
    if(!userId){
        throw new ApiError(400, "User id is required");
    }

    const{ title, description, dateOfBirth, timeOfBirth, placeOfBirth} = kundliData;

    if(!dateOfBirth || !timeOfBirth || placeOfBirth) {
        throw new ApiError(400, "Date of birth, time of birth, and place of birth are required");
    }
}