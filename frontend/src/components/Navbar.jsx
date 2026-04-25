import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext.jsx";

function MenuIcon() {
    return (
        <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        >
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
        </svg>
    );
}

function ProfileIcon() {
    return (
        <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4 20a8 8 0 0 1 16 0" />
        </svg>
    );
}

function AppointmentIcon() {
    return (
        <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M7 3v3" />
        <path d="M17 3v3" />
        <path d="M4 9h16" />
        <rect x="4" y="5" width="16" height="16" rx="2" />
        </svg>
    );
}

function KundliIcon() {
    return (
        <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <circle cx="12" cy="12" r="7" />
        <path d="M12 5v14" />
        <path d="M5 12h14" />
        </svg>
    );
}

function AdminIcon() {
    return (
        <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
        <path d="M9.5 12l1.5 1.5 3.5-3.5" />
        </svg>
    );
}

function LogoutIcon() {
    return (
        <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M10 17l5-5-5-5" />
        <path d="M15 12H4" />
        <path d="M20 4v16" />
        </svg>
    );
}

function Navbar() {
        const { user, logout } = useAuth();
        const navigate = useNavigate();
        const [menuOpen, setMenuOpen] = useState(false);

        const handleLogout = async () => { 
            const confirmed = window.confirm("Are you sure you want to logout?");
            if (!confirmed) return;
            try {
                await logout();
                toast.success("Logged out successfully");
                setMenuOpen(false);
                navigate("/login");
            } catch (error) {
                toast.error(error.message || "Failed to logout");
            }
        }
    return (
        <header className="sticky top-0 z-30">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-amber-200/15 bg-slate-950/60 px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <Link
            to="/"
            className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300"
            >
            NakshatVault
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
            <a
                href="#about"
                className="text-sm text-stone-200/80 transition hover:text-amber-200"
            >
                About
            </a>
            <a
                href="#features"
                className="text-sm text-stone-200/80 transition hover:text-amber-200"
            >
                Features
            </a>
            <a
                href="#process"
                className="text-sm text-stone-200/80 transition hover:text-amber-200"
            >
                Process
            </a>
            </nav>

            {!user ? (
            <div className="hidden items-center gap-3 md:flex">
                <Link
                to="/login"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-stone-100 transition hover:bg-white/10"
                >
                Login
                </Link>
                <Link
                to="/register"
                className="rounded-full bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                Get Started
                </Link>
            </div>
            ) : (
            <div className="relative">
                <button
                type="button"
                onClick={() => setMenuOpen((current) => !current)}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-stone-100 transition hover:bg-white/10"
                >
                <MenuIcon />
                <span>Menu</span>
                </button>

                {menuOpen ? (
                <div className="absolute right-0 top-[calc(100%+0.75rem)] z-40 w-64 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    <Link
                    to="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-stone-100 transition hover:bg-white/10"
                    >
                    <ProfileIcon />
                    <span>Profile</span>
                    </Link>
                    <Link
                    to="/appointment"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-stone-100 transition hover:bg-white/10"
                    >
                    <AppointmentIcon />
                    <span>Appointments</span>
                    </Link>
                    <Link
                    to="/kundli"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-stone-100 transition hover:bg-white/10"
                    >
                    <KundliIcon />
                    <span>Kundli</span>
                    </Link>
                    {user?.role === "admin" ? (
                    <Link
                        to="/admin/dashboard"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-stone-100 transition hover:bg-white/10"
                    >
                        <AdminIcon />
                        <span>Admin Dashboard</span>
                    </Link>
                    ) : null}
                    <button
                    type="button"
                    onClick={handleLogout}
                    className="mt-1 flex w-full cursor-pointer items-center gap-3 rounded-2xl bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500 px-4 py-3 text-left text-sm font-semibold text-slate-950 transition hover:brightness-105"
                    >
                    <LogoutIcon />
                    <span>Logout</span>
                    </button>
                </div>
                ) : null}
            </div>
            )}
        </div>
    </header>
    );
    }

    export default Navbar;
