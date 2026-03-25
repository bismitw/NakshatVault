import jwt from "jsonwebtoken"
import {User} from "../models/user.models.js"
import {ApiError} from "../utils/apiError.utils.js"

const registerUserService = async({fullName, email, password, phone}) => {
    if(!fullName || !email || !password){
        throw new ApiError(400, "FullName, email and password are required");
    }

    const existingUser = await User.findOne({email: email.toLowerCase().trim()});

    if(existingUser){
        throw new ApiError(409, "User with this email already exists");
    }

    const user = await User.create({
        fullName: fullName.trim(),
        email: email.toLowerCase().trim(),
        password,
        phone: phone?.trim()|| "",
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if(!createdUser){
        throw new ApiError(500,"Failed to create User")
    }

    return createdUser;
}

const loginUserService = async({email, password}) => {
    if(!email || !password){
        throw new ApiError(400, "Email and password are required")
    }

    const user = await User.findOne({
        email: email.toLowerCase().trim()
    }).select("+password");

    if(!user){
        throw new ApiError(404, "User not found");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw new ApiError(401, "Invalid user credentials")
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({validateBeforeSave: false});

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    return {
        user: loggedInUser,
        accessToken,
        refreshToken,
    };
};

const logoutUserService = async(userId) => {
    if(!userId){
        throw new ApiError(400, "User Id is required");
    }

    await User.findByIdAndUpdate(
        userId,
        {
            $set: {
                refreshToken: null,
            },
        },
        {
            new: true,
        }
    );
    return null;
};

export {registerUserService, loginUserService, logoutUserService}