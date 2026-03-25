import jwt from "jsonwebtoken";
import { User } from "../models/user.models";
import { ApiError } from "../utils/apiError.utils";
import { asyncHandler } from "../utils/asyncHandler.utils";


const verifyJWT = asyncHandler(async(req, res, next) => {
    const token = req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer", "");

    if(!token){
        throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
})
