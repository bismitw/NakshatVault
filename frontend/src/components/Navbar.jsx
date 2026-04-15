import { Link, useNavigate } from "react-router-dom"; 
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext.jsx";
    
    function Navbar() {
    return (
        <header className="sticky top-0 z-30">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-amber-200/15 bg-slate-950/60 px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
            NakshatVault
            </div>

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
            <a
                href="#contact"
                className="text-sm text-stone-200/80 transition hover:text-amber-200"
            >
                Contact
            </a>
            </nav>

            <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-stone-100 transition hover:bg-white/10">
                Login
            </button>
            <button className="rounded-full bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
                Get Started
            </button>
            </div>

            <button className="rounded-full border border-white/15 px-4 py-2 text-sm text-stone-100 md:hidden">
            Menu
            </button>
        </div>
        </header>
    );
    }

    export default Navbar;
