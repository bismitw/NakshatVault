import Navbar from "../components/Navbar.jsx";
import React from 'react'

const features = [
    {
    title: "Secure Astrology Account",
    description:
        "Create your account, sign in safely, and keep your personal astrology journey organized in one place.",
    },
    {
    title: "Birth Details Management",
    description:
        "Store your date of birth, time of birth, and place of birth accurately for astrology-based calculations.",
    },
    {
    title: "Kundli Records",
    description:
        "Generate, view, update, and manage kundli entries through a clean and structured interface.",
    },
    {
    title: "Appointment Booking",
    description:
        "Book astrology consultations, track appointment requests, and manage upcoming sessions with ease.",
    },
    {
    title: "Profile Dashboard",
    description:
        "Maintain your personal details, astrology information, and account activity from a single dashboard.",
    },
    {
    title: "Guided Experience",
    description:
        "Move from account setup to kundli generation and consultation booking through a clear user flow.",
    },
];

const steps = [
    {
    step: "01",
    title: "Create your account",
    description:
        "Register or log in to access your personal astrology workspace and secure your session.",
    },
    {
    step: "02",
    title: "Add birth details",
    description:
        "Enter accurate birth information so the platform can support kundli-related features properly.",
    },
    {
    step: "03",
    title: "Generate kundli",
    description:
        "Create and manage kundli entries in a clean interface designed for readability and trust.",
    },
    {
    step: "04",
    title: "Book consultation",
    description:
        "Request an astrology appointment and keep track of its status from your account.",
    },
];


function Homepage() {
    return (
        <main className="min-h-screen px-4 py-6 md:px-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
            <Navbar />

            <section className="relative overflow-hidden rounded-4xl border border-amber-200/15 bg-[linear-gradient(180deg,rgba(10,14,35,0.92),rgba(19,24,52,0.98))] px-6 py-16 shadow-[0_24px_80px_rgba(0,0,0,0.32)] md:px-10 md:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,201,122,0.14),transparent_32%)]" />

            <div className="relative mx-auto max-w-3xl text-center">
                <p className="mb-5 text-xs uppercase tracking-[0.4em] text-amber-300">
                Astrology, designed with clarity
                </p>

                <h1 className="text-4xl leading-tight font-semibold text-stone-100 md:text-6xl md:leading-[1.05]">
                Discover your cosmic blueprint through a refined digital astrology
                experience.
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-300/85 md:text-lg">
                Store birth details, generate kundli insights, and explore your
                spiritual profile in a calm interface shaped around trust,
                elegance, and clarity.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="w-full rounded-full bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(201,138,46,0.24)] transition hover:-translate-y-0.5 sm:w-auto">
                    Generate Kundli
                </button>

                <button className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-stone-100 transition hover:bg-white/10 sm:w-auto">
                    Explore Features
                </button>
                </div>
            </div>
            </section>

            <section
            id="about"
            className="grid gap-6 rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-2 md:p-10"
            >
            <div>
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
                About NakshatVault
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-stone-100 md:text-4xl">
                A modern home for sacred astrology journeys.
                </h2>
            </div>

            <p className="text-base leading-8 text-stone-300/85">
                NakshatVault is being shaped as a modern astrology platform where users can
                manage their profile, store birth details, generate kundli records, and book
                consultations in one calm and structured experience. The interface should
                feel spiritual in tone, but still work like a polished product.
            </p>
            </section>

            <section id="features" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
                <article
                key={feature.title}
                className="rounded-[1.75rem] border border-amber-200/10 bg-slate-950/55 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                >
                <p className="text-sm uppercase tracking-[0.28em] text-amber-300">
                    Feature
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-stone-100">
                    {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-300/80">
                    {feature.description}
                </p>
                </article>
            ))}
            </section>

            <section
            id="process"
            className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(13,18,40,0.88),rgba(11,15,32,0.96))] p-6 md:p-10"
            >
            <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
                Process
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-stone-100 md:text-4xl">
                A simple path from birth details to meaningful insight.
                </h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {steps.map((item) => (
                <article
                    key={item.step}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                    <p className="text-sm font-semibold tracking-[0.3em] text-amber-300">
                    {item.step}
                    </p>
                    <h3 className="mt-4 text-xl font-semibold text-stone-100">
                    {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-stone-300/80">
                    {item.description}
                    </p>
                </article>
                ))}
            </div>
            </section>

            <footer
            id="contact"
            className="rounded-4xl border border-amber-200/10 bg-slate-950/70 px-6 py-8 text-center"
            >
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
                NakshatVault
            </p>
            <p className="mt-4 text-sm leading-7 text-stone-300/80">
                A calm and thoughtful astrology platform for kundli, birth details,
                and spiritual guidance.
            </p>
            <p className="mt-6 text-xs text-stone-400">
                © 2026 NakshatVault. All rights reserved.
            </p>
        </footer>
        </div>
        </main>
    )
}

export default Homepage