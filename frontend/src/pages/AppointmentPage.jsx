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

    const [formData, setFormData] = useState({
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


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);

        try {
            const response = await createAppointment(formData);
            setAppointments((current) => [
                response.data,
                ...current
            ])
            setFormData({
                expertName: "",
                expertEmail: "",
                date: "",
                timeSlot: "",
                consultationType: "General",
                mode: "Online",
            });
            toast.success("Appointment booked successfully");
        } catch (error) {
            toast.error(error.message || "Failed to create appointment");
        } finally {
            setSubmitting(false);
        }
    }
}