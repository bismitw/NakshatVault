import { ApiError } from "../utils/apiError.utils.js";

const validateBirthDetailsInput = (req, res, next) => {
    const { dateofBirth, timeofBirth, placeofBirth } = req.body;

    if (!dateofBirth || !timeofBirth || !placeofBirth) {
        return next(
            new ApiError(
                400,
                "Date of birth, time of birth, and place of birth are required",
            ),
        );
    }

    const parsedDate = new Date(dateofBirth);

    if (Number.isNaN(parsedDate.getTime())) {
        return next(new ApiError(400, "Date of birth must be a valid date"));
    }

    if (!timeofBirth.trim()) {
        return next(new ApiError(400, "Time of birth cannot be empty"));
    }

    if (!placeofBirth.trim()) {
        return next(new ApiError(400, "Place of birth cannot be empty"));
    }

    req.body.dateofBirth = parsedDate;
    req.body.timeofBirth = timeofBirth.trim();
    req.body.placeofBirth = placeofBirth.trim();

    next();
};

export { validateBirthDetailsInput };
