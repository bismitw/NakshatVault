import Navbar from "../components/Navbar.jsx";
import React from 'react'

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
        </div>
        </main>
    )
}

export default Homepage