import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import toast from "react-hot-toast";
import {
    getAppointments,
    cancelAppointment,
    createAppointment,
} from "../services/appointments.js";
