import { use, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import toast from "react-hot-toast";
import {
    getAppointments,
    cancelAppointment,
    createAppointment,
} from "../services/appointments.js";


function AppointmentPage() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [cancellingId, setCancellingId] = useState("");

    const [formData, setFormDate] = useState({
        expertName: "",
        expertEmail: "",
        date: "",
        timeSlot: "",
        consultationType: "General",
        mode: "Online",
    })

    useEffect(() => {
        const loadAppointments = async () => {
            try {
                const response = await getAppointments();
                setAppointments(response.data || [])
            } catch (error) {
                toast.error(error.message || "Failed to load appointments");
            }finally{
                setLoading(false);
            }
        };

        loadAppointments();
    }, []);
}