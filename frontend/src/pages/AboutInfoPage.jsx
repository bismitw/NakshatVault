import { Link } from "react-router-dom";
import InfoPageLayout from "../components/InfoPageLayout.jsx";

function AboutInfoPage() {
    return (
        <InfoPageLayout
            eyebrow="About"
            title="A modern space for Vedic astrology"
            subtitle="NakshatVault helps people store birth details, generate kundli records, and book consultations without losing context between sessions."
        >
            <section className="grid gap-6 md:grid-cols-3">
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                    <h2 className="text-lg font-semibold text-amber-300">Our Mission</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        Make astrology information organized, private, and easy to revisit over time.
                    </p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                    <h2 className="text-lg font-semibold text-amber-300">Our Approach</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        Combine classical Vedic principles with a modern workflow and clear user experience.
                    </p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                    <h2 className="text-lg font-semibold text-amber-300">Our Promise</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        Keep improving reliability, clarity, and support quality as the platform grows.
                    </p>
                </article>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-stone-100">What Makes NakshatVault Useful</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-stone-300">
                        Structured profile and birth details
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-stone-300">
                        Persistent kundli history
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-stone-300">
                        Guided appointment workflow
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-stone-300">
                        Secure account-based access
                    </div>
                </div>
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

export default AboutInfoPage;
