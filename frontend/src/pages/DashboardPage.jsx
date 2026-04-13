import { useAuth } from "../context/AuthContext.jsx";

function DashBoardPage() { 
    const {user, logout} = useAuth();

    const handleLogout = async () => {
        await logout();
    }


    return (
        <main className="min-h-screen px-4 py-8 md:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-950/70 p-8">
            <div className="flex items-center justify-between gap-4">
            <div>
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
                Dashboard
                </p>
                <h1 className="mt-3 text-3xl font-semibold text-stone-100">
                Welcome, {user?.fullName}
                </h1>
            </div>

            <button
                onClick={handleLogout}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-stone-100"
            >
                Logout
            </button>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-stone-200">
                Profile
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-stone-200">
                Kundli
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-stone-200">
                Appointments
            </div>
            </div>
        </div>
        </main>
    );
}