import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import {useAuth} from "../context/AuthContext.jsx";
import { FiArrowLeft, FiEye, FiEyeOff } from "react-icons/fi";

function LoginPage(){
    const navigate = useNavigate();
    const {login} = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
    }

    const handleSubmit = async (event) => { 
        event.preventDefault();
        setSubmitting(true);
        setErrorMessage("");

        try {
            const response = await login(formData);
            const loggedInUser = response.data.user
            
            toast.success(`Welcome back, ${loggedInUser.fullName}!`);

            if(loggedInUser.role === "admin"){
                navigate("/admin/dashboard");
            }else{
                navigate("/");
            }
        } catch (error) {
            toast.error(error.message || "Login failed. Please check your credentials and try again.");
            setErrorMessage(error.message)
        }finally{
            setSubmitting(false);
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-center px-4 py-10">
        <section className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-2xl">
            <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm text-stone-300 transition hover:text-stone-100"
                aria-label="Go back"
            >
                <FiArrowLeft size={18} />
                Back
            </button>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
            Welcome Back
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-stone-100">Login</h1>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                    placeholder="Enter your password"
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

            {errorMessage ? (
                <p className="text-sm text-red-300">{errorMessage}</p>
            ) : null}

            <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 disabled:opacity-60"
            >
                {submitting ? "Logging in..." : "Login"}
            </button>
            </form>

            <p className="mt-6 text-sm text-stone-300">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-amber-300 hover:text-amber-200">
                Register
            </Link>
            </p>
        </section>
        </main>
    )

}

export default LoginPage;
