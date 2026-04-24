import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import toast from "react-hot-toast";
import {
    getAppointments,
    cancelAppointment,
    createAppointment,
    getAppointmentOptions,
} from "../services/appointments.js";


function AppointmentPage() {
    const [appointments, setAppointments] = useState([]);
    const [timeSlots, setTimeSlots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [optionsLoading, setOptionsLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [cancellingId, setCancellingId] = useState("");

    const [formData, setFormData] = useState({
        date: "",
        timeSlot: "",
        consultationType: "General",
        mode: "Online",
    })

    const todayInputValue = new Date().toLocaleDateString("en-CA");

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

    useEffect(() => {
        const loadAppointmentOptions = async () => {
            try {
                const response = await getAppointmentOptions();
                setTimeSlots(response.data?.timeSlots || []);
            } catch (error) {
                toast.error(error.message || "Failed to load appointment options");
            } finally {
                setOptionsLoading(false);
            }
        };

        loadAppointmentOptions();
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

    const handleCancel = async (appointmentId) => {
        const confirmed = window.confirm("Are you sure you want to cancel this appointment?");
        if (!confirmed) return;
        setCancellingId(appointmentId);

        try {
            const response = await cancelAppointment(appointmentId);
            setAppointments((current) =>
                current.map((appointment) =>
                    appointment._id === appointmentId ? response.data : appointment,
                ),
            );
        toast.success("Appointment cancelled successfully");
        } catch (error) {
            toast.error(error.message || "Failed to cancel appointment");
        }finally {
            setCancellingId("");
        }
    }

        return (
        <main className="min-h-screen px-4 py-8 md:px-6">
        <div className="mx-auto max-w-6xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <div>
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
                Appointments
                </p>
                <h1 className="mt-3 text-3xl font-semibold text-stone-100">
                Consultation Booking
                </h1>
                <p className="mt-2 text-sm text-stone-300">
                Book astrology consultations and track your appointment status.
                </p>
            </div>

            <Link
                to="/"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-stone-100"
            >
                Back to Home
            </Link>
            </div>

            <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <h2 className="text-2xl font-semibold text-stone-100">
                Book an Appointment
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                <label className="mb-2 block text-sm text-stone-200">Date</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-stone-100 outline-none"
                    min={todayInputValue}
                    required
                />
                </div>

                <div>
                <label className="mb-2 block text-sm text-stone-200">
                    Time Slot
                </label>
                <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-stone-100 outline-none [scheme:dark]"
                    required
                    disabled={optionsLoading}
                >
                    <option value="">
                        {optionsLoading ? "Loading time slots..." : "Select a time slot"}
                    </option>
                    {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                            {slot}
                        </option>
                    ))}
                </select>
                </div>

                <div>
                <label className="mb-2 block text-sm text-stone-200">
                    Consultation Type
                </label>
                <select
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-stone-100 outline-none [scheme:dark]"
                    required
                >
                    <option value="General">General</option>
                    <option value="Marriage">Marriage</option>
                    <option value="Career">Career</option>
                    <option value="Finance">Finance</option>
                    <option value="Health">Health</option>
                    <option value="Other">Other</option>
                </select>
                </div>

                <div>
                <label className="mb-2 block text-sm text-stone-200">Mode</label>
                <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-stone-100 outline-none [scheme:dark]"
                >
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                </select>
                </div>

                <div className="md:col-span-2">
                <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 disabled:opacity-60"
                >
                    {submitting ? "Booking..." : "Book Appointment"}
                </button>
                </div>
            </form>
            </section>

            <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <h2 className="text-2xl font-semibold text-stone-100">
                My Appointments
            </h2>

            {loading ? (
                <p className="mt-4 text-sm text-stone-300">
                Loading appointments...
                </p>
            ) : appointments.length === 0 ? (
                <p className="mt-4 text-sm text-stone-300">
                No appointments found yet.
                </p>
            ) : (
                <div className="mt-6 grid gap-4">
                {appointments.map((appointment) => (
                    <article
                    key={appointment._id}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                        <h3 className="text-xl font-semibold text-stone-100">
                            {appointment.expertName}
                        </h3>
                        <p className="mt-2 text-sm text-stone-300">
                            {appointment.consultationType} consultation via{" "}
                            {appointment.mode}
                        </p>
                        </div>

                        <div className="rounded-full border border-amber-200/15 bg-amber-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-300">
                        {appointment.status}
                        </div>
                    </div>

                    <div className="mt-4 grid gap-3 text-sm text-stone-200 md:grid-cols-4">
                        <div>
                        <span className="text-stone-400">Date:</span>{" "}
                        {appointment.date
                            ? new Date(appointment.date).toLocaleDateString()
                            : "-"}
                        </div>
                        <div>
                        <span className="text-stone-400">Time:</span>{" "}
                        {appointment.timeSlot || "-"}
                        </div>
                        <div>
                        <span className="text-stone-400">Mode:</span>{" "}
                        {appointment.mode || "-"}
                        </div>
                        <div>
                        <span className="text-stone-400">Type:</span>{" "}
                        {appointment.consultationType || "-"}
                        </div>
                    </div>

                    {appointment.status !== "Cancelled" && "Approved" ? (
                        <div className="mt-5">
                        <button
                            type="button"
                            onClick={() => handleCancel(appointment._id)}
                            disabled={cancellingId === appointment._id}
                            className="rounded-full border border-red-400/25 bg-red-500/10 px-4 py-2 text-sm text-red-200 disabled:opacity-60"
                        >
                            {cancellingId === appointment._id
                            ? "Cancelling..."
                            : "Cancel Appointment"}
                        </button>
                        </div>
                    ) : null}
                    </article>
                ))}
                </div>
            )}
            </section>
        </div>
        </main>
    );
}

export default AppointmentPage;
