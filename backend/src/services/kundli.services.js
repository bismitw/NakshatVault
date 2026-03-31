import {Kundli} from "../models/kundli.models.js"
import {User} from "../models/user.models.js"
import { ApiError } from "../utils/apiError.utils.js"

const createKundliService = async ( userId, kundliData ) => {
    if(!userId){
        throw new ApiError(400, "User id is required");
    }

    const{ title, description, dateOfBirth, timeOfBirth, placeOfBirth} = kundliData;

    if(!dateOfBirth || !timeOfBirth || !placeOfBirth) {
        throw new ApiError(400, "Date of birth, time of birth, and place of birth are required");
    }

    const  kundli = await Kundli.create({
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

const getUserKundlisService = async (userId) => {
    if(!userId){
        throw new ApiError(400, "User id is required")
    }

    const kundlis = await Kundli.find({userId}).sort({createdAt: -1});

    return kundlis;
};

const getKundliByIdService = async (userId, kundliId) => {
    if (!userId) {
        throw new ApiError(400, "User id is required");
    }

    if (!kundliId) {
        throw new ApiError(400, "Kundli id is required");
    }

    const kundli = await Kundli.findOne({
        _id: kundliId,
        userId,
    });

    if (!kundli) {
        throw new ApiError(404, "Kundli not found");
    }

    return kundli;
};


export { createKundliService, getUserKundlisService, getKundliByIdService };