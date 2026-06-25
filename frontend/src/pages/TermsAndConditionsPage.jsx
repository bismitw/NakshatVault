import { Link } from "react-router-dom";
import InfoPageLayout from "../components/InfoPageLayout.jsx";

function TermsAndConditionsPage() {
    return (
        <InfoPageLayout
            eyebrow="Legal"
            title="Terms & Conditions"
            subtitle="These terms describe acceptable use, responsibilities, and service boundaries for NakshatVault users."
        >
            <p className="text-sm text-stone-400">Last updated: May 20, 2026</p>

            <section className="grid gap-6 md:grid-cols-2">
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
                    <h2 className="text-xl font-semibold text-amber-300">Account Responsibility</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        You agree to provide accurate details and keep account access credentials secure.
                    </p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
                    <h2 className="text-xl font-semibold text-amber-300">Use of Service</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        Platform access must be used lawfully and without abuse, reverse engineering, or harmful activity.
                    </p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
                    <h2 className="text-xl font-semibold text-amber-300">Guidance Disclaimer</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        Astrology insights are informational and not a substitute for medical, legal, or financial advice.
                    </p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
                    <h2 className="text-xl font-semibold text-amber-300">Service Updates</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        Features and policies may evolve as we improve platform stability, compliance, and user safety.
                    </p>
                </article>
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

export default TermsAndConditionsPage;
