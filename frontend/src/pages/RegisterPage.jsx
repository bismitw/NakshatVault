import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext.jsx";
import { FiArrowLeft, FiEye, FiEyeOff } from "react-icons/fi";

function RegisterPage() { 

    const navigate = useNavigate();
    const {register} = useAuth();


    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        phone: "",

    });

    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setErrorMessage("");
        try {
            await register(formData);
            toast.success("Account created successfully! Please login.");
            navigate("/login");
        } catch (error) {
            setErrorMessage(error.message);
            toast.error(error.message || "Registration failed. Please try again.");
        }finally{
            setSubmitting(false);
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center px-4 py-10">
        <section className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-2xl">
            <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm text-stone-300 transition hover:text-stone-100 cursor-pointer mb-5"
                aria-label="Go back"
            >
                <FiArrowLeft size={18} />
                Back
            </button>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300 flex justify-center">
            Begin Your Journey
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-stone-100 flex justify-center">Register</h1>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
                <label className="mb-2 block text-sm text-stone-200">Full Name</label>
                <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-stone-100 outline-none"
                placeholder="Your full name"
                required
                />
            </div>

            <div>
                <label className="mb-2 block text-sm text-stone-200">Email</label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-stone-100 outline-none"
                placeholder="you@example.com"
                required
                />
            </div>

            <div>
                <label className="mb-2 block text-sm text-stone-200">Password</label>
                <div className="relative">
                    <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 pr-12 text-stone-100 outline-none"
                    placeholder="Strong password"
                    required
                    />
                    <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-stone-300 transition hover:text-stone-100"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                    </button>
                </div>
            </div>

            <div>
                <label className="mb-2 block text-sm text-stone-200">Phone</label>
                <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-stone-100 outline-none"
                placeholder="Optional phone number"
                />
            </div>

            {errorMessage ? (
                <p className="text-sm text-red-300">{errorMessage}</p>
            ) : null}

            <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 disabled:opacity-60"
            >
                {submitting ? "Creating account..." : "Create Account"}
            </button>
            </form>

            <p className="mt-6 text-sm text-stone-300">
            Already have an account?{" "}
            <Link to="/login" className="text-amber-300 hover:text-amber-200">
                Login
            </Link>
            </p>
        </section>
        </main>
    );
}

export default RegisterPage;
