import { Link, useNavigate } from "react-router-dom"; 
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext.jsx";
    
    function Navbar() {
        const { user, logout } = useAuth();
        const navigate = useNavigate();

        const handleLogout = async () => { 
            try {
                await logout();
                toast.success("Logged out successfully");
                navigate("/");
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
            ) : user.role === "admin" ? (
            <div className="hidden items-center gap-3 md:flex">
                <Link
                to="/admin/dashboard"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-stone-100 transition hover:bg-white/10"
                >
                Admin Dashboard
                </Link>
                <button
                onClick={handleLogout}
                className="rounded-full bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                Logout
                </button>
            </div>
            ) : (
            <div className="hidden items-center gap-3 md:flex">
                <Link
                to="/profile"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-stone-100 transition hover:bg-white/10"
                >
                Profile
                </Link>

                <Link
                to="/kundli"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-stone-100 transition hover:bg-white/10"
                >
                Kundli
            </Link>
                <button
                onClick={handleLogout}
                className="rounded-full bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                Logout
                </button>
            </div>
            )}

            <button className="rounded-full border border-white/15 px-4 py-2 text-sm text-stone-100 md:hidden">
            Menu
            </button>
        </div>
    </header>
    );
    }

    export default Navbar;
