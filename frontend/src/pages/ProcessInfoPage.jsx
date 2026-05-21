import { Link } from "react-router-dom";

function ProcessInfoPage() {
    return (
        <main className="min-h-screen bg-slate-950 px-4 py-20 text-stone-100">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-amber-400">Process</h1>
                <ol className="mt-6 list-decimal space-y-3 pl-5 text-base text-stone-300">
                    <li>Create your account and complete profile basics.</li>
                    <li>Add birth details and generate your kundli record.</li>
                    <li>Review insights and save multiple records.</li>
                    <li>Book a consultation if you need deeper guidance.</li>
                </ol>
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

export default ProcessInfoPage;
