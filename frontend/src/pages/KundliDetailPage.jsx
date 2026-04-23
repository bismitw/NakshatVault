import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
    deleteKundli,
    getKundliById,
    updateKundli,
} from "../services/kundli.js";
import { normalizeTimeInputValue } from "../utils/time.js";

function KundliDetailPage() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [kundli, setKundli] = useState(null);
    const [loading,  setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dateOfBirth: "",
        timeOfBirth: "",
        placeOfBirth: "",
    });

    useEffect(  () => {

        const loadKundli = async () => {
        try {
            const response = await getKundliById(id);
            const record = response.data
            setKundli(record);
            setFormData({
                title: record.title || "",
                description: record.description || "",
                dateOfBirth: record.dateOfBirth? new Date(record.dateOfBirth).toISOString().split("T")[0] : "",
                timeOfBirth: normalizeTimeInputValue(record.timeOfBirth),
                placeOfBirth: record.placeOfBirth || "",
            });
        } catch (error) {
            toast.error("Failed to Load kundli details" || error.message);
        }finally{
            setLoading(false);
        }
    };
        loadKundli();
    }, [id]);


    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((current) => ({
            ...current,
            [name]: value,
        }))
    }

    const handleUpdate = async (event) => {
        event.preventDefault();
        setSaving(true);

        try {
            const response = await updateKundli(id, formData);
            setKundli(response.data);
            toast.success("Kundli updated successfully");
        } catch (error) {
            toast.error("Failed to update kundli" || error.message);
        }finally{
            setSaving(false);
        }
    }

    const handleDelete = async () => {
        const confirmed = window.confirm("Are you sure you want to delete this kundli?");
        if(!confirmed){
            return;
        }

        setDeleting(true);

        try {
            await deleteKundli(id);
            toast.success("Kundli deleted successfully");
            navigate("/kundli");
        } catch (error) {
            toast.error("Failed to delete kundli" || error.message);
        }finally{
            setDeleting(false);
        }
    }

    if(loading) {
        return (
            <main className="flex min-h-screen items-center justify-center text-stone-200">
                Loading kundli...
            </main>
        )
    }

    if(!kundli) { 
        return (
            <main className="flex min-h-screen items-center justify-center text-stone-200">
                Kundli not found.
            </main>
        );
    }



return (
    <main className="min-h-screen px-4 py-8 md:px-6">
        <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
                Kundli Details
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-stone-100">
                {kundli.title || "Untitled Kundli"}
            </h1>
            <p className="mt-2 text-sm text-stone-300">
                Review and update this kundli record.
            </p>
            </div>

            <Link
            to="/kundli"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-stone-100"
            >
            Back to Kundli List
            </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <h2 className="text-2xl font-semibold text-stone-100">Edit Kundli</h2>

            <form
                onSubmit={handleUpdate}
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
                />
                </div>

                <div className="md:col-span-2 flex gap-4">
                <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 rounded-full bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 disabled:opacity-60"
                >
                    {saving ? "Saving..." : "Update Kundli"}
                </button>

                <button
                    type="button"
                    onClick={handleDelete}
                    disabled={deleting}
                    className="rounded-full border border-red-400/25 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-200 disabled:opacity-60"
                >
                    {deleting ? "Deleting..." : "Delete"}
                </button>
                </div>
            </form>
            </section>

            <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <h2 className="text-2xl font-semibold text-stone-100">
                Generated Snapshot
            </h2>

            <div className="mt-5 space-y-4 text-sm text-stone-200">
                <div>
                <span className="text-stone-400">Provider:</span>{" "}
                {kundli.provider || "-"}
                </div>
                <div>
                <span className="text-stone-400">Nakshatra:</span>{" "}
                {kundli.nakshatraName || "-"}
                </div>
                <div>
                <span className="text-stone-400">Nakshatra Lord:</span>{" "}
                {kundli.nakshatraLord || "-"}
                </div>
                <div>
                <span className="text-stone-400">Pada:</span>{" "}
                {kundli.nakshatraPada || "-"}
                </div>
                <div>
                <span className="text-stone-400">Moon Sign:</span>{" "}
                {kundli.moonSign || "-"}
                </div>
                <div>
                <span className="text-stone-400">Sun Sign:</span>{" "}
                {kundli.sunSign || "-"}
                </div>
                <div>
                <span className="text-stone-400">Zodiac:</span>{" "}
                {kundli.zodiac || "-"}
                </div>
            </div>
            </section>
        </div>
        </div>
    </main>
);
}

export default KundliDetailPage;