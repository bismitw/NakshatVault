import { createKundliService } from "../services/kundli.services.js";
import { ApiResponse } from "../utils/apiResponse.utils.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";

const createKundli = asyncHandler(async (req, res) => {
    const kundli = await createKundliService(req.user?._id, req.body);

    return res
    .status(201)
    .json(new ApiResponse(201, kundli, "Kundli created successfully"));
});

export { createKundli };