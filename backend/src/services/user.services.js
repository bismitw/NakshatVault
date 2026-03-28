import { User } from "../models/user.models.js"
import { ApiError } from "../utils/apiError.utils.js"

const updateUserProfileService = async (userId, updateData) => {
    if(!userId){
        throw new ApiError(400, "User id is required")
    }

    const allowedFields = ["fullName", "phone", "avatar"];
    const filteredData = {};

    for(const field of allowedFields) {
        if(updateData[field] !== undefined) {
            filteredData[field] = typeof updateData[field] === "string"
            ? updateData[field].trim()
            : updateData[field];
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
                placeofBirth: placeofBirth.trim(),
            },
        },
        {
            new: true,
            runValidators: true,
        }
    ).select("-password -refreshToken")

    if(!updatedUser){
        throw new ApiError(404, "User Not found");
    }

    return updatedUser
}

export { updateUserProfileService, updateBirthDetailsService }
