import { ApiError } from "../utils/apiError.utils";

const validateKundliInput = (req,res,next) => {
    const {title, description, dateOfBirth, timeOfBirth, placeOfBirth} = req.body
}