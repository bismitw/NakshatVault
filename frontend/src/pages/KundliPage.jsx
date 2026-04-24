import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { generateKundli, getKundlis } from "../services/kundli.js";

function KundliPage() {
    const [kundlis, setKundlis] = useState([]);  
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dateOfBirth: "",
        timeOfBirth: "",
        placeOfBirth: "",
    });

    useEffect(() => {
        const loadKundlis = async () => {
            try {
                const response = await getKundlis();
                setKundlis(response.data || []);
            } catch (error) {
                toast.error(error.message || "Failed to load kundlis");
            }finally {
                setLoading(false);
            }
        }
        loadKundlis();
    }, []);

    const handleChange = (event) => {

        const {name, value} = event.target;
        setFormData((current) => ({
            ...current,
            [name]: value,
        }))
    }

    const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
    const response = await generateKundli(formData);
    setKundlis((current) => [response.data, ...current]);

    setFormData({
        title: "",
        description: "",
        dateOfBirth: "",
        timeOfBirth: "",
        placeOfBirth: "",
    });

    toast.success("Kundli generated successfully");
    } catch (error) {
    toast.error(error.message || "Failed to generate kundli");
    } finally {
    setSubmitting(false);
    }
};

return (
    <main className="min-h-screen px-4 py-8 md:px-6">
        <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
                Kundli
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-stone-100">
                Generate Kundli
            </h1>
            <p className="mt-2 text-sm text-stone-300">
                Create and review generated kundli records from your account.
            </p>
            </div>

            <Link
            to="/"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-stone-100"
            >
            Back to Home
            </Link>
        </div>

        <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <h2 className="text-2xl font-semibold text-stone-100">
            Kundli Generation Form
            </h2>
            <p className="mt-2 text-sm text-stone-300">
            Enter accurate birth details to generate a kundli.
            </p>

            <form
            onSubmit={handleSubmit}
            className="mt-6 grid gap-5 md:grid-cols-2"
            >
            <div>
                <label className="mb-2 block text-sm text-stone-200">Title</label>
                <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-stone-100 outline-none"
                placeholder="Generated Kundli"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm text-stone-200">
                Date of Birth
                </label>
                <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-stone-100 outline-none"
                max={new Date().toISOString().split("T")[0]}
                required
                />
            </div>

            <div>
                <label className="mb-2 block text-sm text-stone-200">
                Time of Birth
                </label>
                <input
                type="time"
                name="timeOfBirth"
                value={formData.timeOfBirth}
                onChange={handleChange}
                step="900"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-stone-100 outline-none"
                required
                />
                </div>

            <div>
                <label className="mb-2 block text-sm text-stone-200">
                Place of Birth
                </label>
                <input
                type="text"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-stone-100 outline-none"
                placeholder="City, State, Country"
                required
                />
            </div>

            <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-stone-200">
                Description
                </label>
                <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-stone-100 outline-none"
                placeholder="Optional note for this kundli"
                />
            </div>

            <div className="md:col-span-2">
                <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 disabled:opacity-60"
                >
                {submitting ? "Generating..." : "Generate Kundli"}
                </button>
            </div>
            </form>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <h2 className="text-2xl font-semibold text-stone-100">
            Generated Kundli Records
            </h2>

            {loading ? (
            <p className="mt-4 text-sm text-stone-300">Loading kundlis...</p>
            ) : kundlis.length === 0 ? (
            <p className="mt-4 text-sm text-stone-300">
                No kundli records found yet.
            </p>
            ) : (
            <div className="mt-6 grid gap-4">
                {kundlis.map((kundli) => (
                <article
                    key={kundli._id}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-semibold text-stone-100">
                        {kundli.title || "Untitled Kundli"}
                        </h3>
                        <p className="mt-2 text-sm text-stone-300">
                        {kundli.description || "No description provided."}
                        </p>
                    </div>

                    <div className="rounded-full border border-amber-200/15 bg-amber-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-300">
                        {kundli.provider || "Manual"}
                    </div>
                    </div>

                    <div className="mt-4 grid gap-3 text-sm text-stone-200 md:grid-cols-3">
                    <div>
                        <span className="text-stone-400">Date:</span>{" "}
                        {kundli.dateOfBirth
                        ? new Date(kundli.dateOfBirth).toLocaleDateString()
                        : "-"}
                    </div>
                    <div>
                        <span className="text-stone-400">Time:</span>{" "}
                        {kundli.timeOfBirth || "-"}
                    </div>
                    <div>
                        <span className="text-stone-400">Place:</span>{" "}
                        {kundli.placeOfBirth || "-"}
                    </div>
                    </div>

                    <div className="mt-4 grid gap-3 text-sm text-stone-200 md:grid-cols-4">
                    <div>
                        <span className="text-stone-400">Nakshatra:</span>{" "}
                        {kundli.nakshatraName || "-"}
                    </div>
                    <div>
                        <span className="text-stone-400">Lord:</span>{" "}
                        {kundli.nakshatraLord || "-"}
                    </div>
                    <div>
                        <span className="text-stone-400">Moon Sign:</span>{" "}
                        {kundli.moonSign || "-"}
                    </div>
                    <div>
                        <span className="text-stone-400">Sun Sign:</span>{" "}
                        {kundli.sunSign || "-"}
                    </div>
                    </div>

                    <div className="mt-5">
                    <Link
                        to={`/kundli/${kundli._id}`}
                        className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-100 transition hover:bg-white/10"
                    >
                        View Details
                    </Link>
                    </div>
                </article>
                ))}
            </div>
            )}
        </section>
        </div>
    </main>
);
}

export default KundliPage;
