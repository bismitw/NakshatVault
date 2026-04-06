import { ApiError } from "../utils/apiError.utils.js";

const validateRegisterInput =  (req, res, next) => {
    const {fullName, email, password} = req.body;

    if(!fullName || !email || !password){
        return next(new ApiError(400, "FullName, Email and Password are required"));
    }

    const trimmedFullName = fullName.trim();
    const trimmedEmail = email.trim().toLowerCase();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#^()_\-+=])[A-Za-z\d@$!%*?&.#^()_\-+=]{8,}$/;

    if (!trimmedFullName) {
        return next(new ApiError(400, "Full name cannot be empty"));
    }

    if (!emailRegex.test(trimmedEmail)) {
        return next(new ApiError(400, "Invalid email format"));
    }

    if (!passwordRegex.test(password)) {
        return next(
        new ApiError(
            400,
            "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
        ),
    );
    }

    if (password.length < 6) {
        return next(
            new ApiError(400, "Password must be at least 6 characters long"),
        );
    }

    req.body.fullName = trimmedFullName;
    req.body.email = trimmedEmail;

    next();
}
const validateLoginInput = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ApiError(400, "Email and password are required"));
    }

    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
        return next(new ApiError(400, "Invalid email format"));
    }

    if (!password.trim()) {
        return next(new ApiError(400, "Password cannot be empty"));
    }

    req.body.email = trimmedEmail;

    next();
};

export { validateRegisterInput, validateLoginInput };