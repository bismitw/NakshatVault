import { createKundliService } from "../services/kundli.services.js";
import { ApiResponse } from "../utils/apiResponse.utils.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";
import { getUserKundlisService } from "../services/kundli.services.js";

const createKundli = asyncHandler(async (req, res) => {
    const kundli = await createKundliService(req.user?._id, req.body);

    return res
    .status(201)
    .json(new ApiResponse(201, kundli, "Kundli created successfully"));
});

const getUserKundlis = asyncHandler(async (req, res) => {
    const kundlis = await getUserKundlisService(req.user?._id);

    return res
    .status(200)
    .json(new ApiResponse(200, kundlis, "Kundlis fetched successfully"));
});
export { createKundli, getUserKundlis };