import { Link } from "react-router-dom";

function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-slate-950 px-4 py-20 text-stone-100">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-amber-400">Privacy Policy</h1>
                <p className="mt-2 text-sm text-stone-400">Last updated: May 20, 2026</p>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-300">
                    <p>
                        NakshatVault collects account information, profile details, and birth details required to
                        provide kundli generation and consultation features.
                    </p>
                    <p>
                        We use this data to operate the platform, improve user experience, and maintain account
                        security. We do not sell personal user data.
                    </p>
                    <p>
                        You may request account-related assistance or data removal support by contacting our support
                        team at support@nakshatvault.com.
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

export default PrivacyPolicyPage;
