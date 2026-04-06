import { ApiError } from "../utils/apiError.utils.js";

const validateRegisterInput =  (req, res, next) => {
    const {fullName, email, password} = req.body;

    if(!fullName || !email || !password){
        return next(new ApiError(400, "FullName, Email and Password are required"));
    }

}