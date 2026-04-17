import {Kundli} from "../models/kundli.models.js"
import {User} from "../models/user.models.js"
import { ApiError } from "../utils/apiError.utils.js"
import { fetchKundliDataFromProkerala } from "./astrology.services.js"

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


const updateKundliService = async (userId, kundliId, updateData) => {
    if (!userId) {
        throw new ApiError(400, "User id is required");
    }

    if (!kundliId) {
        throw new ApiError(400, "Kundli id is required");
    }

    const allowedFields = [
        "title",
        "description",
        "dateOfBirth",
        "timeOfBirth",
        "placeOfBirth",
    ];

    const filteredData = {};

    for (const field of allowedFields) {
        if (updateData[field] !== undefined) {
        filteredData[field] =
            typeof updateData[field] === "string"
            ? updateData[field].trim()
            : updateData[field];
        }
    }

    const updatedKundli = await Kundli.findOneAndUpdate(
        {
        _id: kundliId,
        userId,
        },
        {
        $set: filteredData,
        },
        {
        new: true,
        runValidators: true,
        },
    );

    if (!updatedKundli) {
        throw new ApiError(404, "Kundli not found");
    }

    return updatedKundli;
    };


const deleteKundliService = async (userId, kundliId) => {
    if (!userId) {
        throw new ApiError(400, "User id is required");
    }

    if (!kundliId) {
        throw new ApiError(400, "Kundli id is required");
    }

    const deletedKundli = await Kundli.findOneAndDelete({
        _id: kundliId,
        userId,
    });

    if (!deletedKundli) {
        throw new ApiError(404, "Kundli not found");
    }

    await User.findByIdAndUpdate(userId, {
        $pull: {
        kundlis: kundliId,
        },
    });

    return deletedKundli;
};

const generateKundliService = async(userId, kundliInput) => {
    if(!userId){
        throw new ApiError(400, "User id is required")
    }

    const {title, description, dateOfBirth, timeOfBirth, placeOfBirth, latitude, longitude, timezone} = kundliInput

    if(!dateOfBirth || !placeOfBirth || !timeOfBirth){
        throw new ApiError(400, "Date of birth, time of birth, and place of birth are required");
    }

    if(!latitude || !longitude ||!timezone){
        throw new ApiError(400, "Latitude, longitude, and timezone are required for kundli generation")
    }

    const providerResponse = await fetchKundliDataFromProkerala({
        dateOfBirth,
        timeOfBirth,
        latitude,
        longitude,
        timezone,
    });

    const generatedProfile = providerResponse?.data || {};
}


export { createKundliService, getUserKundlisService, getKundliByIdService, updateKundliService, deleteKundliService };