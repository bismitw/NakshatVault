import { ApiResponse } from "../utils/apiResponse.utils.js"
import { asyncHandler } from "../utils/asyncHandler.utils.js";
import { updateUserProfileService } from "../services/user.services.js";

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

export { getUserProfile, updateUserProfile };