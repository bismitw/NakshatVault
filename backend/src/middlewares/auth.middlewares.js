import jwt from "jsonwebtoken";
import { User } from "../models/user.models";
import { ApiError } from "../utils/apiError.utils";
import { asyncHandler } from "../utils/asyncHandler.utils";


const verifyJWT = asyncHandler(async(req, res, next) => {
    const token = req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer", "");

})