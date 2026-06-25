import { Link } from "react-router-dom";
import InfoPageLayout from "../components/InfoPageLayout.jsx";

function FeaturesInfoPage() {
    return (
        <InfoPageLayout
            eyebrow="Features"
            title="Everything you need in one astrology workflow"
            subtitle="From onboarding to consultations, NakshatVault is designed to keep your chart data and actions connected."
        >
            <section className="grid gap-6 md:grid-cols-2">
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
                    <h2 className="text-xl font-semibold text-amber-300">Account and Security</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        Secure registration, login, protected routes, and role-based access for safe user experiences.
                    </p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
                    <h2 className="text-xl font-semibold text-amber-300">Kundli Management</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        Generate, save, update, and review kundli records across multiple profiles and sessions.
                    </p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
                    <h2 className="text-xl font-semibold text-amber-300">Consultation Flow</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        Browse options, schedule appointments, and track updates from your account dashboard.
                    </p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
                    <h2 className="text-xl font-semibold text-amber-300">Admin Visibility</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        Admin tools provide visibility into users and appointments for support and operations.
                    </p>
                </article>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-stone-100">Feature Highlights</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    <li className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-stone-300">Sun and Moon sign insights</li>
                    <li className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-stone-300">Nakshatra name, lord, and pada data</li>
                    <li className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-stone-300">Saved history for repeat use</li>
                    <li className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-stone-300">Consultation status tracking</li>
                </ul>
            </section>

            <div>
                <Link
                    to="/"
                    className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-stone-100 transition hover:bg-white/10"
                >
                    Back to Home
                </Link>
            </div>
        </InfoPageLayout>
    );
}

export default FeaturesInfoPage;
