import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

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
            navigate("/login");
        } catch (error) {
            setErrorMessage(error.message);
        }finally{
            setSubmitting(false);
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center px-4 py-10">
        <section className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
            Begin Your Journey
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-stone-100">Register</h1>

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
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-stone-100 outline-none"
                placeholder="Strong password"
                required
                />
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