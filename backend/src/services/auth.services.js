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

    const user = User.create({
        fullName: fullName.trim(),
        email: email.tolowercase().trim(),
        password,
        phone: phone.trim()|| "",
    })

    const createdUser = await User.findById(user._id).select("-password,-refreshToken");

    if(!createdUser){
        throw new error(500,"Failed to create User")
    }

    return createdUser;
}
