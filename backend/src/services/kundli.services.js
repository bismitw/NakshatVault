import {Kundli} from "../models/kundli.models.js"
import {User} from "../models/user.models.js"
import { ApiError } from "../utils/apiError.utils.js"

const createKundliService = async ( userId, kundliData ) => {
    if(!userId){
        throw new ApiError(400, "User id is required");
    }

    const{ title, description, dateOfBirth, timeOfBirth, placeOfBirth} = kundliData;

    if(!dateOfBirth || !timeOfBirth || placeOfBirth) {
        throw new ApiError(400, "Date of birth, time of birth, and place of birth are required");
    }

    const  kundli = await kundli.create({
        userId, 
        title: title?.trim()|| "My birth Kundli",
        description: description?.trim() || null,
        dateOfBirth,
        timeOfBirth: timeOfBirth?.trim(),
        placeOfBirth: placeOfBirth?.trim(),
    });
        await User.findByIdAndUpdate(userId, {
            $push: {
                kundlis: kundli._id,
            },
        });
        return kundli;
}
export { createKundliService };