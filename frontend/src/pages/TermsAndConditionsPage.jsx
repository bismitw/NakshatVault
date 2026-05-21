import { Link } from "react-router-dom";

function TermsAndConditionsPage() {
    return (
        <main className="min-h-screen bg-slate-950 px-4 py-20 text-stone-100">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-amber-400">Terms & Conditions</h1>
                <p className="mt-2 text-sm text-stone-400">Last updated: May 20, 2026</p>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-300">
                    <p>
                        By using NakshatVault, you agree to use the platform lawfully and provide accurate account and
                        birth detail information.
                    </p>
                    <p>
                        Astrology content is provided for informational and spiritual guidance and should not be treated
                        as medical, legal, or financial advice.
                    </p>
                    <p>
                        We may update features, limits, or policies to improve service quality and security.
                    </p>
                </div>
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

export default TermsAndConditionsPage;
