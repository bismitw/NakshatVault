import { User } from "../models/user.models.js"
import { ApiError } from "../utils/apiError.utils.js"

const updateUserProfileService = async (userId, updateData) => {
    if(!userId){
        throw new ApiError(400, "User id is required")
    }

    const allowedFields = ["fullName", "email", "phone"];
    const filteredData = {};

    for(const field of allowedFields) {
        if(updateData[field] !== undefined) {
            filteredData[field] = typeof updateData[field] === "string"
            ? updateData[field].trim()
            : updateData[field];
        }
    }

    if (filteredData.email) {
        filteredData.email = filteredData.email.toLowerCase();

        const existingUser = await User.findOne({
            email: filteredData.email,
            _id: { $ne: userId },
        });

        if (existingUser) {
            throw new ApiError(409, "User with this email already exists");
        }
    }

    const updatedUser = await User.findByIdAndUpdate(
        userId,{
            $set: filteredData,
        },
        {
            new : true,
            runValidators: true,
        }
    ).select("-password -refreshToken");
    if(!updatedUser) {
        throw new ApiError(404, "User Not found");
    }
    return updatedUser;
}

const updateBirthDetailsService = async (userId, birthData) => {
    if(!userId){
        throw new ApiError(400, "User id is required")
    }
    const {dateofBirth, timeofBirth, placeofBirth} = birthData;

    const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
            $set: {
                dateofBirth,
                timeofBirth: timeofBirth?.trim(),
                placeofBirth: placeofBirth?.trim(),
            },
        },
        {
            new: true,
            runValidators: true,
        }
    ).select("-password -refreshToken")

    if(!updatedUser){
        throw new ApiError(404, "User not found");
    }

    return updatedUser
}

const getAllUsersService = async () => {
    const users = await User.find()
        .select("-password -refreshToken")
        .sort({ createdAt: -1 });

    return users;
};

export { updateUserProfileService, updateBirthDetailsService, getAllUsersService }
