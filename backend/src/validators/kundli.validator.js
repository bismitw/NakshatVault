import { ApiError } from "../utils/apiError.utils";

const validateKundliInput = (req,res,next) => {
    const {title, description, dateOfBirth, timeOfBirth, placeOfBirth} = req.body
}

if(!dateOfBirth || !timeOfBirth || !placeOfBirth){
    return next (
        new ApiError(400,"Date of birth, time of birth, and place of birth are required"
    )
    )
}