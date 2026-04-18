import { ApiError } from "../utils/apiError.utils.js";

const validateKundliInput = (req,res,next) => {
    const {title, description, dateOfBirth, timeOfBirth, placeOfBirth} = req.body


if(!dateOfBirth || !timeOfBirth || !placeOfBirth){
    return next (
        new ApiError(400,"Date of birth, time of birth, and place of birth are required")
    )
}



    if (title !== undefined && !title.trim()) {
        return next(new ApiError(400, "Title cannot be empty"));
    }

    if (!timeOfBirth.trim()) {
        return next(new ApiError(400, "Time of birth cannot be empty"));
    }

    if (!placeOfBirth.trim()) {
        return next(new ApiError(400, "Place of birth cannot be empty"));
    }

    if (title !== undefined) {
        req.body.title = title.trim();
    }

    if (description !== undefined) {
        req.body.description = description.trim();
    }

    req.body.timeOfBirth = timeOfBirth.trim();
    req.body.placeOfBirth = placeOfBirth.trim();

    next();
};

const valdateGeneratedInput = (req, res, next) => {
    const 
{   
    title,
    description,
    dateOfBirth,
    timeOfBirth,
    placeOfBirth,
    latitude,
    longitude,
    timezone,
} = req.body

if (!dateOfBirth || !timeOfBirth || !placeOfBirth) {
    return next(
    new ApiError(
        400,
        "Date of birth, time of birth, and place of birth are required",
    ),
    );
}

if(!longitude || !latitude || !timezone){
    return next(
        new ApiError(400, "Latitude, longitude, and timezone are required for kundli generation")
    )
}

if (title !== undefined && !title.trim()) {
    return next(new ApiError(400, "Title cannot be empty"));
}

if (!timeOfBirth.trim()) {
    return next(new ApiError(400, "Time of birth cannot be empty"));
}

if (!placeOfBirth.trim()) {
    return next(new ApiError(400, "Place of birth cannot be empty"));
}

}
export {validateKundliInput}
