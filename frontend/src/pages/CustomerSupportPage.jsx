import { Link } from "react-router-dom";

function CustomerSupportPage() {
    return (
        <main className="min-h-screen bg-slate-950 px-4 py-20 text-stone-100">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-amber-400">Customer Support</h1>
                <p className="mt-6 text-base leading-relaxed text-stone-300">
                    Need help with account access, kundli records, or appointments? Reach out to our support team and
                    include clear details of your issue for faster help.
                </p>
                <div className="mt-6 space-y-2 text-stone-300">
                    <p>Email: support@nakshatvault.com</p>
                    <p>Response Time: Within 24-48 business hours</p>
                    <p>Support Hours: Monday to Saturday, 10:00 AM - 6:00 PM (IST)</p>
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

export default CustomerSupportPage;
