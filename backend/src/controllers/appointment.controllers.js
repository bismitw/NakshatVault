import { createAppointmentService } from "../services/appointment.services.js";
import { ApiResponse } from "../utils/apiResponse.utils.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";

const createAppointment = asyncHandler(async (req, res) => {
    const appointment = await createAppointmentService(req.user?._id, req.body);

    return res
    .status(201)
    .json(
        new ApiResponse(201, appointment, "Appointment created successfully"),
    );
});

export { createAppointment };
