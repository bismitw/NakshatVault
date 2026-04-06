import {ApiError} from "../utils/apiError.utils.js";

const verifyAdmin = (req, res, next) => {

    if(!req.user) {
        return next (new ApiError(401,"Unauthorized Request"));
    }
    if (req.user.role !== "admin") {
        return next(new ApiError(403, "Access denied. Admins only"));
    }

    next();
};

export {verifyAdmin}