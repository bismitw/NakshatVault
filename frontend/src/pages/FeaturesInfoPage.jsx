import { Link } from "react-router-dom";

function FeaturesInfoPage() {
    return (
        <main className="min-h-screen bg-slate-950 px-4 py-20 text-stone-100">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-amber-400">Features</h1>
                <ul className="mt-6 list-disc space-y-3 pl-5 text-base text-stone-300">
                    <li>User authentication and protected profile management.</li>
                    <li>Kundli generation and stored record history.</li>
                    <li>Sun sign, Moon sign, and nakshatra insights.</li>
                    <li>Appointment booking and status tracking.</li>
                    <li>Role-based access for admin workflows.</li>
                </ul>
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

export default FeaturesInfoPage;
