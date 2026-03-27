import { User } from "../models/user.models.js"
import { ApiError } from "../utils/apiError.utils.js"

const updateUserProfileServer = async (userId, updateDate) => {
    if(!userId){
        throw new ApiError(400, "User id is required")
    }

    const allowedFields = ["fullName", "phone", "avatar"];
    const filteredData = {};
}
