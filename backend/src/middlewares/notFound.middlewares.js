import { ApiError } from "../utils/apiError.utils.js";

const notFoundHandler = (req, res, next) => {
    next(new ApiError(404, `Route not found: ${req.originalUrl}`));
}

export {notFoundHandler}