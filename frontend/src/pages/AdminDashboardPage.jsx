import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext.jsx";

function AdminDashboardPage() {
    const {user, logout} = useAuth();
    const navigate = useNavigate();


    const handleLogout = async () => {
        try {
            await logout();
            toast.success("Logged out successfully");
            navigate("/");
        } catch (error) {
            toast.error(error.message || "Logout failed");
        }
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
                    Manage appointments and monitor platform activity.
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
                User Overview
                </h2>
                <p className="mt-2 text-sm text-stone-300">
                Review general platform access and user data later.
                </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-stone-200">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                Appointments
                </p>
                <h2 className="mt-3 text-xl font-semibold text-stone-100">
                Appointment Control
                </h2>
                <p className="mt-2 text-sm text-stone-300">
                View all appointments and update their status.
                </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-stone-200">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                System
                </p>
                <h2 className="mt-3 text-xl font-semibold text-stone-100">
                Admin Tools
                </h2>
                <p className="mt-2 text-sm text-stone-300">
                More admin controls can be added here later.
                </p>
            </div>
            </section>
        </div>
        </main>
    );
}

export default AdminDashboardPage;