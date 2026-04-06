import { ApiError } from "../utils/apiError.utils.js";

const validateRegisterInput =  (req, res, next) => {
    const {fullName, email, password} = req.body;

    if(!fullName || !email || !password){
        return next(new ApiError(400, "FullName, Email and Password are required"));
    }

    const trimmedFullName = fullName.trim();
    const trimmedEmail = email.trim().toLowerCase();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedFullName) {
        return next(new ApiError(400, "Full name cannot be empty"));
    }

    if (!emailRegex.test(trimmedEmail)) {
        return next(new ApiError(400, "Invalid email format"));
    }

    if (password.length < 6) {
        return next(
            new ApiError(400, "Password must be at least 6 characters long"),
        );
    }
}