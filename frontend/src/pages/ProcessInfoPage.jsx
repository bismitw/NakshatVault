import { Link } from "react-router-dom";
import InfoPageLayout from "../components/InfoPageLayout.jsx";

function ProcessInfoPage() {
    return (
        <InfoPageLayout
            eyebrow="Process"
            title="How the NakshatVault journey works"
            subtitle="A simple, repeatable flow that helps you move from profile setup to meaningful astrological guidance."
        >
            <section className="grid gap-4 md:grid-cols-2">
                {[
                    "Create your account and set profile basics.",
                    "Enter birth details carefully for accuracy.",
                    "Generate your kundli and review core placements.",
                    "Save records and compare over time.",
                    "Book consultation when deeper interpretation is needed.",
                    "Track updates and revisit insights anytime.",
                ].map((step, index) => (
                    <article key={step} className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Step {index + 1}</p>
                        <p className="mt-2 text-sm leading-relaxed text-stone-300">{step}</p>
                    </article>
                ))}
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-stone-100">Best Results Tips</h2>
                <ul className="mt-4 space-y-3 text-sm text-stone-300">
                    <li>Use accurate birth time and location whenever possible.</li>
                    <li>Keep profile details updated before requesting consultations.</li>
                    <li>Review saved records before booking follow-up sessions.</li>
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

export default ProcessInfoPage;
