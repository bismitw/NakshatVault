import { ApiResponse } from "../utils/apiResponse.utils.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";
import {
    createKundliService, 
    getUserKundlisService,
    getKundliByIdService,
    updateKundliService,
    deleteKundliService,
} from "../services/kundli.services.js";

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


const getKundliById = asyncHandler(async (req, res) => {
    const kundli = await getKundliByIdService(req.user?._id, req.params.id);
    return res
    .status(200)
    .json(new ApiResponse(200, kundli, "Kundli fetched successfully"));
});

const updateKundli = asyncHandler(async (req, res) => {
    const kundli = await updateKundliService(
    req.user?._id,
    req.params.id,
    req.body,
    );

    return res
    .status(200)
    .json(new ApiResponse(200, kundli, "Kundli updated successfully"));
});

const deleteKundli = asyncHandler(async(req, res) => {
    const kundli = await deleteKundliService(
        req.user?._id, 
        req.params.id
    );

    return res 
    .status(200)
    .json(new ApiResponse(200, kundli, "Kundli deleted successfully"));
})

export { createKundli, getUserKundlis, getKundliById, updateKundli, deleteKundli };