import { ApiResponse } from "../utils/apiResponse.utils.js"
import { asyncHandler } from "../utils/asyncHandler.utils.js";
import { updateUserProfileService, updateBirthDetailsService } from "../services/user.services.js";

const getUserProfile = asyncHandler(async (req, res) => {
    return res 
    .status(200)
    .json(new ApiResponse(200, req.user, "User profile fetched successfully"));
});

const updateUserProfile = asyncHandler(async(req, res) => {
    const updatedUser = await updateUserProfileService(req.user?._id, req.body);

    return res
    .status(200)
    .json(new ApiResponse(200, updatedUser, "User Profile updated successfully"))
})

const updateBirthDetails = asyncHandler(async(req, res) => {
    const updatedUser = await updateBirthDetailsService(req.user?._id, req.body);
    return res 
    .status(200)
    .json(new ApiResponse(200, updatedUser, "Birth details updated successfully"))
})

export { getUserProfile, updateUserProfile, updateBirthDetails };