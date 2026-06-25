import { Link } from "react-router-dom";
import InfoPageLayout from "../components/InfoPageLayout.jsx";

function PrivacyPolicyPage() {
    return (
        <InfoPageLayout
            eyebrow="Legal"
            title="Privacy Policy"
            subtitle="This page explains what data we collect, why we collect it, and how we protect user privacy."
        >
            <p className="text-sm text-stone-400">Last updated: May 20, 2026</p>

            <section className="grid gap-6 md:grid-cols-2">
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
                    <h2 className="text-xl font-semibold text-amber-300">Data We Collect</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        Account details, profile information, birth details, and appointment-related records.
                    </p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
                    <h2 className="text-xl font-semibold text-amber-300">Why We Use It</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        To provide kundli generation, support consultations, and maintain security and service quality.
                    </p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
                    <h2 className="text-xl font-semibold text-amber-300">Data Sharing</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        We do not sell personal data. Limited third-party processing may be used for hosting, email,
                        and infrastructure operations.
                    </p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
                    <h2 className="text-xl font-semibold text-amber-300">User Requests</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone-300">
                        For account support, data questions, or deletion requests, contact support@nakshatvault.com.
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

export default PrivacyPolicyPage;
