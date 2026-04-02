import { ApiError } from "../utils/apiError.utils.js";

const validateRequiredFields = (fields) => {
    return (req, res, next) => {
        const missingFields = fields.filter((field) => {
            const value = req.body?.[field];

            return value === undefined || value === null || value === "";
        });

        if(missingFields.length > 0) {
            return next (
                next ( 
                    new ApiError(
                        400,
                        `Missing required fields: ${missingFields.join(", ")}` 
            )
        )
            )
        }
        next();
    };
};

export { validateRequiredFields };