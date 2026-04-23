import { ApiError } from "../utils/apiError.utils.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+\-() ]{7,20}$/;
const timeRegex = /^([01]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/;

const validateUserProfileInput = (req, res, next) => {
    const { fullName, email, phone } = req.body;

    if (fullName === undefined || email === undefined) {
        return next(new ApiError(400, "Full name and email are required"));
    }

    const trimmedFullName = fullName.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPhone = phone === undefined ? undefined : phone.trim();

    if (!trimmedFullName) {
        return next(new ApiError(400, "Full name cannot be empty"));
    }

    if (!emailRegex.test(trimmedEmail)) {
        return next(new ApiError(400, "Invalid email format"));
    }

    if (trimmedPhone !== undefined && trimmedPhone && !phoneRegex.test(trimmedPhone)) {
        return next(new ApiError(400, "Invalid phone number"));
    }

    req.body.fullName = trimmedFullName;
    req.body.email = trimmedEmail;

    if (trimmedPhone !== undefined) {
        req.body.phone = trimmedPhone;
    }

    next();
};

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

    const normalizedTime = timeofBirth.trim();
    if (!timeRegex.test(normalizedTime)) {
        return next(new ApiError(400, "Time of birth must be in HH:MM format"));
    }

    req.body.dateofBirth = parsedDate;
    req.body.timeofBirth = normalizedTime;
    req.body.placeofBirth = placeofBirth.trim();

    next();
};

export { validateUserProfileInput, validateBirthDetailsInput };
