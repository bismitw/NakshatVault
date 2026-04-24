import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext.jsx";
import { getAllAppointments, updateAppointmentStatus } from "../services/appointments.js";
import { getAllUsers } from "../services/user.js";

const STATUS_OPTIONS = ["Booked", "In Review", "Approved", "Cancelled"];

function AdminDashboardPage() {
    const {user, logout} = useAuth();
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [savingStatusId, setSavingStatusId] = useState("");

    const handleLogout = async () => {
        const confirmed = window.confirm("Are you sure you want to logout?");
        if (!confirmed) return;

        try {
            await logout();
            toast.success("Logged out successfully");
            navigate("/login");
        } catch (error) {
            toast.error(error.message || "Logout failed");
        }
    };

    useEffect(() => {
        const loadAdminData = async () => {
            try {
                const [usersResponse, appointmentsResponse] = await Promise.all([
                    getAllUsers(),
                    getAllAppointments(),
                ]);

                setUsers(usersResponse.data || []);
                setAppointments(appointmentsResponse.data || []);
            } catch (error) {
                toast.error(error.message || "Failed to load admin data");
            } finally {
                setLoading(false);
            }
        };

        loadAdminData();
    }, []);

    const handleStatusChange = (appointmentId, value) => {
        setAppointments((current) =>
            current.map((appointment) =>
                appointment._id === appointmentId
                    ? { ...appointment, status: value }
                    : appointment,
            ),
        );
    };

    const handleStatusSave = async (appointmentId, status) => {
        setSavingStatusId(appointmentId);

        try {
            const response = await updateAppointmentStatus(appointmentId, status);
            setAppointments((current) =>
                current.map((appointment) =>
                    appointment._id === appointmentId
                        ? { ...appointment, ...response.data }
                        : appointment,
                ),
            );
            toast.success("Appointment status updated");
        } catch (error) {
            toast.error(error.message || "Failed to update appointment");
        } finally {
            setSavingStatusId("");
        }
    };

    if (loading) {
        return (
            <main className="flex min-h-screen items-center justify-center text-stone-200">
                Loading admin dashboard...
            </main>
        );
    }

    return (
        <main className="min-h-screen px-4 py-8 md:px-6">
            <div className="mx-auto max-w-6xl space-y-6">
                <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
                                Admin Dashboard
                            </p>
                            <h1 className="mt-3 text-3xl font-semibold text-stone-100">
                                Welcome, {user?.fullName}
                            </h1>
                            <p className="mt-2 text-sm text-stone-300">
                                Manage users and appointments from one place.
                            </p>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-stone-100"
                        >
                            Logout
                        </button>
                    </div>
                </section>

                <section className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-stone-200">
                        <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                            Users
                        </p>
                        <h2 className="mt-3 text-xl font-semibold text-stone-100">
                            {users.length} registered users
                        </h2>
                        <p className="mt-2 text-sm text-stone-300">
                            Review the current account roster and profile details.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-stone-200">
                        <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                            Appointments
                        </p>
                        <h2 className="mt-3 text-xl font-semibold text-stone-100">
                            {appointments.length} total appointments
                        </h2>
                        <p className="mt-2 text-sm text-stone-300">
                            Update booking status and monitor consultation requests.
                        </p>
                    </div>

                    <Link
                        to="/appointment"
                        className="rounded-2xl border border-white/10 bg-white/5 p-5 text-stone-200 transition hover:bg-white/10"
                    >
                        <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                            Public View
                        </p>
                        <h2 className="mt-3 text-xl font-semibold text-stone-100">
                            Appointment Page
                        </h2>
                        <p className="mt-2 text-sm text-stone-300">
                            Open the user booking experience for quick checks.
                        </p>
                    </Link>
                </section>

                <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                    <h2 className="text-2xl font-semibold text-stone-100">
                        Appointment Management
                    </h2>

                    <div className="mt-6 grid gap-4">
                        {appointments.length === 0 ? (
                            <p className="text-sm text-stone-300">No appointments found.</p>
                        ) : (
                            appointments.map((appointment) => (
                                <article
                                    key={appointment._id}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-stone-100">
                                                {appointment.userId?.fullName || "Unknown User"}
                                            </h3>
                                            <p className="mt-2 text-sm text-stone-300">
                                                {appointment.userId?.email || "-"}
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

                                    <div className="mt-5 flex flex-wrap items-center gap-3">
                                        <select
                                            value={appointment.status}
                                            onChange={(event) =>
                                                handleStatusChange(appointment._id, event.target.value)
                                            }
                                            className="rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-stone-100 outline-none [scheme:dark]"
                                        >
                                            {STATUS_OPTIONS.map((status) => (
                                                <option key={status} value={status}>
                                                    {status}
                                                </option>
                                            ))}
                                        </select>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleStatusSave(appointment._id, appointment.status)
                                            }
                                            disabled={savingStatusId === appointment._id}
                                            className="rounded-full bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 disabled:opacity-60"
                                        >
                                            {savingStatusId === appointment._id
                                                ? "Saving..."
                                                : "Save Status"}
                                        </button>
                                    </div>
                                </article>
                            ))
                        )}
                    </div>
                </section>

                <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                    <h2 className="text-2xl font-semibold text-stone-100">
                        User Management
                    </h2>

                    <div className="mt-6 grid gap-4">
                        {users.length === 0 ? (
                            <p className="text-sm text-stone-300">No users found.</p>
                        ) : (
                            users.map((account) => (
                                <article
                                    key={account._id}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-stone-100">
                                                {account.fullName}
                                            </h3>
                                            <p className="mt-2 text-sm text-stone-300">
                                                {account.email}
                                            </p>
                                        </div>

                                        <div className="rounded-full border border-amber-200/15 bg-amber-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-300">
                                            {account.role || "user"}
                                        </div>
                                    </div>

                                    <div className="mt-4 grid gap-3 text-sm text-stone-200 md:grid-cols-3">
                                        <div>
                                            <span className="text-stone-400">Phone:</span>{" "}
                                            {account.phone || "-"}
                                        </div>
                                        <div>
                                            <span className="text-stone-400">Joined:</span>{" "}
                                            {account.createdAt
                                                ? new Date(account.createdAt).toLocaleDateString()
                                                : "-"}
                                        </div>
                                        <div>
                                            <span className="text-stone-400">Profile:</span>{" "}
                                            {account.isProfileComplete ? "Complete" : "Incomplete"}
                                        </div>
                                    </div>
                                </article>
                            ))
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default AdminDashboardPage;
