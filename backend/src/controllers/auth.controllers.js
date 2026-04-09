import { loginUserService, registerUserService, logoutUserService, refreshAccessTokenService } from "../services/auth.services.js";
import { ApiResponse } from "../utils/apiResponse.utils.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";

const getCookieOptions = () => {
    const isProduction = process.env.NODE_ENV === "production";

    return {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
    };
};

const setAuthCookies = (res, accessToken, refreshToken) => {
    const cookieOptions = getCookieOptions();

    return res
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions);
};

const clearAuthCookies = (res) => {
    const cookieOptions = getCookieOptions();

    return res
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions);
};

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
    .json(new ApiResponse(201,user, "User registered successfully"))
})


const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;

    const{user, accessToken, refreshToken} = await loginUserService({
        email,
        password,
    });

    return setAuthCookies(res, accessToken, refreshToken).status(200).json(
        new ApiResponse(
            200,
            {
                user,
                accessToken,
                refreshToken,
            },
            "User logged in successfully"
        )
    )
})

const getCurrentUser = asyncHandler(async(req, res) => {
    return res 
    .status(200)
    .json(new ApiResponse(200, req.user, "Current user fetched successfully"));
});

const logoutUser = asyncHandler(async (req, res) => {
    await logoutUserService(req.user?._id);
    return clearAuthCookies(res)
    .status(200)
    .json(new ApiResponse(200, null, "User Logged out successfully"));
});


const refreshAccessToken = asyncHandler(async(req, res) => {
    const incomingRefreshToken = req.body?.refreshToken || req.cookies?.refreshToken;

    const { accessToken, refreshToken} = await refreshAccessTokenService(
        incomingRefreshToken
    );

    return setAuthCookies(res, accessToken, refreshToken).status(200).json(
        new ApiResponse(
            200, {
                accessToken, refreshToken
            },
            "Access token refreshed Successfully"
        )
    )
})
export {registerUser, loginUser, getCurrentUser, logoutUser, refreshAccessToken}
