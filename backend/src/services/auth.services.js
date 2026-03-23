import {User} from "../models/user.models.js"
import {ApiError} from "../utils/apiError.utils.js"

const registerUserService = async({fullName, email, password, phone}) => {
    if(!fullName || !email || !password){
        throw new ApiError(400, "FullName, email and password are required");
    }

    const existingUser = await User.findOne({email: email.tolowercase().trim()});

    if(existingUser){
        throw new ApiError(400, "User with this email already exists");
    }
}