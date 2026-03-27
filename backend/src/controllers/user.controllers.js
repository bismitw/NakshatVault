import { ApiResponse } from "../utils/apiResponse.utils.js"
import { asyncHandler } from "../utils/asyncHandler.utils.js";

const getUserProfile = asyncHandler(async (req, res) => {
    return res 
    .status(200)
    .json(new ApiResponse(200, req.user, "User profile fetched successfully"));
});

export { getUserProfile };