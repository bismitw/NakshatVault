import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
    getUserProfile,
    updateBirthDetails,
    updateUserProfile,
} from "../services/user.js";
import { useAuth } from "../context/AuthContext.jsx";
import { normalizeTimeInputValue } from "../utils/time.js";


function ProfilePage(){
    const {user, setUser} = useAuth();

    const [profileForm, setProfileForm] = useState({
        fullName: "",
        email: "",
        phone: "",
    });

    const [birthForm, setBirthForm] = useState({
        dateofBirth: "",
        timeofBirth: "",
        placeofBirth: "",
    })

    const [loading, setLoading] = useState(true);
    const [profileSaving, setProfileSaving] = useState(false);
    const [birthSaving, setBirthSaving] = useState(false);
    const [profileMessage, setProfileMessage] = useState("");
    const [birthMessage, setBirthMessage] = useState("");
    const [profileError, setProfileError] = useState("");
    const [birthError, setBirthError] = useState("");

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const response = await getUserProfile();
                const profile = response.data;

                setUser(profile);
                setProfileForm({
                    fullName: profile.fullName || "",
                    email: profile.email || "",
                    phone: profile.phone || "",
                });
                setBirthForm({
                    dateofBirth: profile.dateofBirth? new Date(profile.dateofBirth).toISOString().split("T")[0]: "",
                    timeofBirth: normalizeTimeInputValue(profile.timeofBirth),
                    placeofBirth: profile.placeofBirth || "",
                });

            } catch (error) {
                setProfileError(error.message);
                toast.error(error.message||"Failed to load profile");
            }finally {
                setLoading(false);
            }
        };
        loadProfile();
    }, [setUser]);

    const handleProfileChange = (event) => {
        const {name, value} = event.target;
        setProfileForm((current) => ({
            ...current,
            [name]: value,
        }))
    };

    const handleBirthChange = (event) => {
        const {name, value} = event.target;
        setBirthForm((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleProfileSubmit = async (event) => {
        event.preventDefault();
        setProfileSaving(true);
        setProfileMessage("");
        setProfileError("");

        try {
            const response = await updateUserProfile(profileForm);
            setUser(response.data);
            setProfileMessage("Profile updated successfully");
            toast.success("Profile updated successfully");
        } catch (error) {
            setProfileError(error.message)
            toast.error(error.message || "Failed to update profile");
        }finally {
            setProfileSaving(false);
        }
    }

    const handleBirthSubmit = async (event) => {
        event.preventDefault();
        setBirthSaving(true);
        setBirthMessage("");
        setBirthError("");

        try {
            const response = await updateBirthDetails(birthForm);
            setUser(response.data);
            setBirthMessage("Birth details updated successfully");
            toast.success("Birth details updated successfully");
        } catch (error) {
            setBirthError(error.message)
            toast.error(error.message || "Failed to update birth details");
        }finally {
            setBirthSaving(false);
        }
    }

    if(loading) {
        return (
            <main className="flex min-h-screen items-center justify-center text-stone-200">
                Loading profile...
            </main>
        );
    }
    return (
        <main className="min-h-screen px-4 py-8 md:px-6">
        <div className="mx-auto max-w-6xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <div>
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
                User Settings
                </p>
                <h1 className="mt-3 text-3xl font-semibold text-stone-100">
                Profile & Birth Details
                </h1>
                <p className="mt-2 text-sm text-stone-300">
                Manage your account information and astrology-related birth data.
                </p>
            </div>

            <Link
                to="/"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-stone-100"
            >
                Back to Home
            </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
            <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                <h2 className="text-2xl font-semibold text-stone-100">
                Personal Profile
                </h2>
                <p className="mt-2 text-sm text-stone-300">
                Update your name, email address, and phone number.
                </p>

                <form onSubmit={handleProfileSubmit} className="mt-6 space-y-5">
                <div>
                    <label className="mb-2 block text-sm text-stone-200">
                    Full Name
                    </label>
                    <input
                    type="text"
                    name="fullName"
                    value={profileForm.fullName}
                    onChange={handleProfileChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-stone-100 outline-none"
                    placeholder="Your full name"
                    required
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm text-stone-200">
                    Email
                    </label>
                    <input
                    type="email"
                    name="email"
                    value={profileForm.email}
                    onChange={handleProfileChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-stone-100 outline-none"
                    placeholder="you@example.com"
                    required
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm text-stone-200">
                    Phone
                    </label>
                    <input
                    type="text"
                    name="phone"
                    value={profileForm.phone}
                    onChange={handleProfileChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-stone-100 outline-none"
                    placeholder="Phone number"
                    />
                </div>

                {profileMessage ? (
                    <p className="text-sm text-emerald-300">{profileMessage}</p>
                ) : null}

                {profileError ? (
                    <p className="text-sm text-red-300">{profileError}</p>
                ) : null}

                <button
                    type="submit"
                    disabled={profileSaving}
                    className="w-full rounded-full bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 disabled:opacity-60"
                >
                    {profileSaving ? "Saving..." : "Save Profile"}
                </button>
                </form>
            </section>

            <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                <h2 className="text-2xl font-semibold text-stone-100">
                Birth Details
                </h2>
                <p className="mt-2 text-sm text-stone-300">
                These details are used for kundli-related features.
                </p>

                <form onSubmit={handleBirthSubmit} className="mt-6 space-y-5">
                <div>
                    <label className="mb-2 block text-sm text-stone-200">
                    Date of Birth
                    </label>
                    <input
                    type="date"
                    name="dateofBirth"
                    value={birthForm.dateofBirth}
                    onChange={handleBirthChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-stone-100 outline-none"
                    max={new Date().toISOString().split("T")[0]}
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm text-stone-200">
                    Time of Birth
                    </label>
                    <input
                    type="time"
                    name="timeofBirth"
                    value={birthForm.timeofBirth}
                    onChange={handleBirthChange}
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
                    name="placeofBirth"
                    value={birthForm.placeofBirth}
                    onChange={handleBirthChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-stone-100 outline-none"
                    placeholder="City, State, Country"
                    />
                </div>

                {birthMessage ? (
                    <p className="text-sm text-emerald-300">{birthMessage}</p>
                ) : null}

                {birthError ? (
                    <p className="text-sm text-red-300">{birthError}</p>
                ) : null}

                <button
                    type="submit"
                    disabled={birthSaving}
                    className="w-full rounded-full bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 disabled:opacity-60"
                >
                    {birthSaving ? "Saving..." : "Save Birth Details"}
                </button>
                </form>
            </section>
            </div>

            <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <h2 className="text-2xl font-semibold text-stone-100">
                Profile Snapshot
            </h2>
            <p className="mt-2 text-sm text-stone-300">
                A quick view of your personal and birth details.
            </p>

            <div className="mt-5 grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-300">
                    Personal Profile
                </p>
                <div className="mt-4 space-y-3 text-sm text-stone-100">
                    <div>
                    <span className="text-stone-400">Full Name:</span>{" "}
                    {user?.fullName || "-"}
                    </div>
                    <div>
                    <span className="text-stone-400">Email:</span>{" "}
                    {user?.email || "-"}
                    </div>
                    <div>
                    <span className="text-stone-400">Phone:</span>{" "}
                    {user?.phone || "-"}
                    </div>
                </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-300">
                    Birth Details
                </p>
                <div className="mt-4 space-y-3 text-sm text-stone-100">
                    <div>
                    <span className="text-stone-400">Date of Birth:</span>{" "}
                    {user?.dateofBirth
                        ? new Date(user.dateofBirth).toLocaleDateString()
                        : "-"}
                    </div>
                    <div>
                    <span className="text-stone-400">Time of Birth:</span>{" "}
                    {normalizeTimeInputValue(user?.timeofBirth) || "-"}
                    </div>
                    <div>
                    <span className="text-stone-400">Place of Birth:</span>{" "}
                    {user?.placeofBirth || "-"}
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
        </main>
    );
}

export default ProfilePage;
