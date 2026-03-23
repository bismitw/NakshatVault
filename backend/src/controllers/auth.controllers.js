import { registerUserService } from "../services/auth.services";
import { ApiResponse } from "../utils/apiResponse.utils.js";
import { AsyncHandler } from "../utils/asyncHandler.utils.js";


const registerUser  = asyncHandler( async(req, res)=> {
    const {fullName, email, password, phone} = req.body;
    

})