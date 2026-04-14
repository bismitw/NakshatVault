import {Link, useNavigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function DashboardPage() { 
    const {user, logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/login")
    }


    return (
        <main className="min-h-screen px-4 py-8 md:px-6">
            <div className="mx-auto max-w-6xl space-y-6">
            <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
                    Dashboard
                    </p>
                    <h1 className="mt-3 text-3xl font-semibold text-stone-100">
                    Welcome, {user?.fullName}
                    </h1>
                    <p className="mt-2 text-sm text-stone-300">
                    Manage your profile, kundli records, and appointments from one
                    place.
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
                <Link
                to="/profile"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-stone-200 transition hover:bg-white/10"
                >
                <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                    Profile
                </p>
                <h2 className="mt-3 text-xl font-semibold text-stone-100">
                    Manage Account
                </h2>
                <p className="mt-2 text-sm text-stone-300">
                    Update your personal information and birth details.
                </p>
                </Link>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-stone-200">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                    Kundli
                </p>
                <h2 className="mt-3 text-xl font-semibold text-stone-100">
                    Kundli Records
                </h2>
                <p className="mt-2 text-sm text-stone-300">
                    Create, view, edit, and manage kundli entries.
                </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-stone-200">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                    Appointments
                </p>
                <h2 className="mt-3 text-xl font-semibold text-stone-100">
                    Consultation Requests
                </h2>
                <p className="mt-2 text-sm text-stone-300">
                    Book sessions and track appointment activity.
                </p>
                </div>
            </section>
            </div>
        </main>
    );
}

export default DashboardPage;