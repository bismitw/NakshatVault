import { ApiError } from "../utils/apiError.utils.js";

const timeRegex = /^([01]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/;

const isFutureDate = (dateValue) => {
    const parsedDate = new Date(dateValue);

    if (Number.isNaN(parsedDate.getTime())) {
        return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    parsedDate.setHours(0, 0, 0, 0);

    return parsedDate > today;
};

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

    if (!timeRegex.test(timeOfBirth.trim())) {
        return next(new ApiError(400, "Time of birth must be in HH:MM format"));
    }

    if (isFutureDate(dateOfBirth)) {
        return next(new ApiError(400, "Date of birth cannot be in the future"));
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

const validateGeneratedKundliInput = (req, res, next) => {
    const 
{   
    title,
    description,
    dateOfBirth,
    timeOfBirth,
    placeOfBirth,
} = req.body

if (!dateOfBirth || !timeOfBirth || !placeOfBirth) {
    return next(
    new ApiError(
        400,
        "Date of birth, time of birth, and place of birth are required",
    ),
    );
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

    if (!timeRegex.test(timeOfBirth.trim())) {
        return next(new ApiError(400, "Time of birth must be in HH:MM format"));
    }

    if (isFutureDate(dateOfBirth)) {
        return next(new ApiError(400, "Date of birth cannot be in the future"));
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
}
export {validateKundliInput, validateGeneratedKundliInput}
