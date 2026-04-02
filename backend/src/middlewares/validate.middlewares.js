import { ApiError } from "../utils/apiError.utils";

const validateRequiredFields = (fields) => {
    return (req, res, next) => {
        const missingFields = fields.filter((field) => {
            const value = req.body?.[field];

            return value === undefined || value === null || value === "";
        })
    }
}