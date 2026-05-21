import { Link } from "react-router-dom";

function AboutInfoPage() {
    return (
        <main className="min-h-screen bg-slate-950 px-4 py-20 text-stone-100">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-amber-400">About NakshatVault</h1>
                <p className="mt-6 text-base leading-relaxed text-stone-300">
                    NakshatVault is a modern Vedic astrology platform built to help users manage their birth details,
                    generate kundli records, and book consultations in one clean place.
                </p>
                <p className="mt-4 text-base leading-relaxed text-stone-300">
                    Our goal is to make astrology workflows easy to understand, practical to use, and consistent over
                    time for both first-time and returning users.
                </p>
                <Link
                    to="/"
                    className="mt-8 inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-stone-100 transition hover:bg-white/10"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
}

export default AboutInfoPage;
