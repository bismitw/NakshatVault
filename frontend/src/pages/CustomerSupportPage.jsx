import { Link } from "react-router-dom";
import InfoPageLayout from "../components/InfoPageLayout.jsx";

function CustomerSupportPage() {
    return (
        <InfoPageLayout
            eyebrow="Help"
            title="Customer Support"
            subtitle="If you face issues with account access, kundli records, or appointments, our support team is here to help."
        >
            <section className="grid gap-6 md:grid-cols-3">
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                    <h2 className="text-lg font-semibold text-amber-300">Support Email</h2>
                    <p className="mt-3 text-sm text-stone-300">support@nakshatvault.com</p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                    <h2 className="text-lg font-semibold text-amber-300">Response Time</h2>
                    <p className="mt-3 text-sm text-stone-300">Usually within 24-48 business hours.</p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                    <h2 className="text-lg font-semibold text-amber-300">Support Hours</h2>
                    <p className="mt-3 text-sm text-stone-300">Monday to Saturday, 10:00 AM - 6:00 PM (IST).</p>
                </article>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-stone-100">How to Get Faster Help</h2>
                <ul className="mt-4 space-y-3 text-sm text-stone-300">
                    <li>Include the email used for registration.</li>
                    <li>Describe what action you performed before the issue appeared.</li>
                    <li>Share a screenshot and exact error message if available.</li>
                    <li>Mention whether the issue is from mobile or desktop browser.</li>
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

export default CustomerSupportPage;
