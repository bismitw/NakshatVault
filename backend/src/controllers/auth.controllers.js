import { registerUserService } from "../services/auth.services";
import { ApiResponse } from "../utils/apiResponse.utils.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";


const registerUser  = asyncHandler( async(req, res)=> {
    const {fullName, email, password, phone} = req.body;
    
    const user = await registerUserService({
        fullName, 
        email,
        password,
        phone,
    });

    return res
    .status(201)
    .json(new ApiResponse(201,user, "User registered Successfully"))
})

export {registerUser}