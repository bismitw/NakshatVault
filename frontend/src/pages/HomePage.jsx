    import { Stars } from "@react-three/drei";
    import { Canvas } from "@react-three/fiber";
    import { useEffect } from "react";
    import { FiArrowRight } from "react-icons/fi";
    import { Link } from "react-router-dom";
    import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
    } from "framer-motion";
    import Navbar from "../components/Navbar.jsx";
    import Footer from "../components/Footer.jsx";

    const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

    function FeatureIconAppointments(props) {
    return (
        <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={props.className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M16 2V6M8 2V6" />
        <path d="M3 10H21" />
        <rect x="3" y="4" width="18" height="18" rx="4" />
        <circle cx="7.5" cy="14" r="0.75" fill="currentColor" stroke="none" />
        <circle cx="12" cy="14" r="0.75" fill="currentColor" stroke="none" />
        <circle cx="16.5" cy="14" r="0.75" fill="currentColor" stroke="none" />
        <circle cx="7.5" cy="18" r="0.75" fill="currentColor" stroke="none" />
        <circle cx="12" cy="18" r="0.75" fill="currentColor" stroke="none" />
        <circle cx="16.5" cy="18" r="0.75" fill="currentColor" stroke="none" />
        </svg>
    );
    }

    function FeatureIconKundli(props) {
    return (
        <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={props.className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M12 3l9 9-9 9-9-9 9-9Z" />
        <path d="M12 3v18" />
        <path d="M3 12h18" />
        </svg>
    );
    }

    function FeatureIconSunMoon(props) {
    return (
        <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={props.className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M4 12H2" />
        <path d="M22 12h-2" />
        <path d="M5 5l-1.5-1.5" />
        <path d="M20.5 20.5L19 19" />
        <path d="M19 5l1.5-1.5" />
        <path d="M3.5 20.5L5 19" />
        <circle cx="12" cy="12" r="4" />
        <path d="M19.5 14.5a5.5 5.5 0 0 1-6-6 5 5 0 1 0 6 6Z" />
        </svg>
    );
    }

    function FeatureIconNakshatra(props) {
    return (
        <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={props.className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M12 2l2.3 6.6H21l-5.4 3.9 2 6.5L12 15.7 6.4 19l2-6.5L3 8.6h6.7L12 2Z" />
        </svg>
    );
    }

    function FeatureIconSaved(props) {
    return (
        <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={props.className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M7 3h10a2 2 0 0 1 2 2v16l-7-4-7 4V5a2 2 0 0 1 2-2Z" />
        </svg>
    );
    }

    function FeatureIconSecure(props) {
    return (
        <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={props.className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M12 2l8 4v6c0 5-3.3 9.3-8 10-4.7-.7-8-5-8-10V6l8-4Z" />
        <path d="M9 12a3 3 0 1 1 6 0v3H9v-3Z" />
        <path d="M12 15v2" />
        </svg>
    );
    }

    const HOME_FEATURES = [
    {
        title: "Kundli Generation",
        description:
        "Enter birth details once and generate a structured kundli record you can revisit anytime.",
        Icon: FeatureIconKundli,
    },
    {
        title: "Sun & Moon Sign",
        description:
        "See the placements people ask about most, presented clearly and consistently across records.",
        Icon: FeatureIconSunMoon,
    },
    {
        title: "Nakshatra Snapshot",
        description:
        "Store nakshatra name, lord, and pada so your lunar context is always available.",
        Icon: FeatureIconNakshatra,
    },
    {
        title: "Saved Records",
        description:
        "Maintain multiple kundli entries for yourself or family without losing older charts.",
        Icon: FeatureIconSaved,
    },
    {
        title: "Appointments",
        description:
        "Book consultations and track updates from your account in a simple flow.",
        Icon: FeatureIconAppointments,
    },
    {
        title: "Secure Accounts",
        description:
        "Protected routes and role-based access keep your profile and records private.",
        Icon: FeatureIconSecure,
    },
    ];

    const HOME_STEPS = [
    {
        title: "Create a free account",
        description:
        "Register in seconds to unlock saved kundli records and appointment features.",
    },
    {
        title: "Generate your kundli",
        description:
        "Add birth date, time, and place, then generate a record with sign and nakshatra details.",
    },
    {
        title: "Review or book",
        description:
        "Open your saved records anytime or book a consultation when you want guidance.",
    },
    ];

    const HOME_TESTIMONIALS = [
    {
        quote:
        "Everything feels organized. I can save my birth details and come back to my kundli anytime.",
        name: "A user",
        role: "Kundli records",
    },
    {
        quote:
        "The Sun sign, Moon sign, and nakshatra summary is exactly what I wanted at a glance.",
        name: "A user",
        role: "Astrology profile",
    },
    {
        quote:
        "Appointments are easy to track. It makes consultations smoother because everything is already saved.",
        name: "A user",
        role: "Consultation booking",
    },
    {
        quote:
        "Clean UI, no clutter. It feels calm compared to most astrology sites.",
        name: "A user",
        role: "Experience",
    },
    ];

    function HomePage() {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
        ease: "easeInOut",
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
        });
    }, [color]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    
    return (
        <>
        <motion.section
        style={{
            backgroundImage,
        }}
        className="relative min-h-screen overflow-hidden bg-gray-950 px-4 pb-24 text-gray-200"
        >
        <div className="relative z-20 pt-4">
            <Navbar />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-4xl flex-col items-center justify-center">
            <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
            Live Now
            </span>
            <h1 className="max-w-3xl bg-linear-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
            Astrology, designed with clarity
            </h1>
            <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
            Discover your cosmic blueprint through a refined digital astrology
            experience.
            </p>
            <motion.button
            style={{
                border,
                boxShadow,
            }}
            whileHover={{
                scale: 1.015,
            }}
            whileTap={{
                scale: 0.985,
            }}
            className="group relative flex w-fit cursor-pointer items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
            >
            Get Started
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
        </div>

        <div className="absolute inset-0 z-0">
            <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
            </Canvas>
        </div>
        </motion.section>

        <main className="bg-slate-950 px-4 py-14 text-gray-200 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-6xl space-y-12">
            <style>{`
            @keyframes nv-marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            `}</style>
            <section id="about" className="grid scroll-mt-28 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
                About
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-stone-100 sm:text-4xl">
                A modern home for your astrology essentials
                </h2>
                <p className="mt-4 text-base leading-relaxed text-stone-300">
                NakshatVault helps you keep birth details, kundli records, and consultation bookings in one clean
                workflow, so your insights stay consistent over time.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                <Link
                    to="/register"
                    className="rounded-full bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-105"
                >
                    Create Account
                </Link>
                <Link
                    to="/kundli"
                    className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-stone-100 transition hover:bg-white/10"
                >
                    Generate Kundli
                </Link>
                </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300">What you get</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                    <p className="text-sm font-semibold text-stone-100">Sun & Moon Sign</p>
                    <p className="mt-1 text-sm text-stone-300">The two placements people ask about most.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                    <p className="text-sm font-semibold text-stone-100">Nakshatra Details</p>
                    <p className="mt-1 text-sm text-stone-300">Name, lord, and pada saved per record.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                    <p className="text-sm font-semibold text-stone-100">Saved Kundli Records</p>
                    <p className="mt-1 text-sm text-stone-300">Create and revisit multiple charts.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                    <p className="text-sm font-semibold text-stone-100">Appointments</p>
                    <p className="mt-1 text-sm text-stone-300">Book consultations when you’re ready.</p>
                </div>
                </div>
            </div>
            </section>

            <section id="features" className="scroll-mt-28">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-25">
                <div className="text-center">
                <h2 className="text-3xl font-bold leading-tight text-stone-100 sm:text-4xl xl:text-5xl">
                    Make every step user-centric
                </h2>
                <p className="mt-4 text-base leading-7 text-stone-300 sm:mt-8">
                    Save your essentials, generate your kundli, and keep everything consultation-ready.
                </p>
                </div>

                <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
                {HOME_FEATURES.map((feature, index) => {
                    const isSecondColumn = index % 3 === 1;
                    const isThirdColumn = index % 3 === 2;
                    const isSecondRow = index >= 3;
                    const borderClasses = [
                    isSecondColumn || isThirdColumn ? "md:border-l md:border-white/10" : "",
                    isSecondRow ? "md:border-t md:border-white/10" : "",
                    ]
                    .filter(Boolean)
                    .join(" ");
                    const Icon = feature.Icon ?? FeatureIconKundli;

                    return (
                    <div key={feature.title} className={`md:p-6 lg:p-10 ${borderClasses}`}>
                        <Icon className="mx-auto h-10 w-10 text-amber-300" />
                        <h3 className="mt-8 text-xl font-bold text-stone-100">{feature.title}</h3>
                        <p className="mt-3 text-base text-stone-300">{feature.description}</p>
                    </div>
                    );
                })}
                </div>
            </div>
            </section>

            <section id="process" className="scroll-mt-28">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-25">
                <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-stone-100 sm:text-4xl lg:text-5xl">
                    How does it work?
                </h2>
                <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-stone-300">
                    Add your birth details, generate a kundli record, then review or book a consultation.
                </p>
                </div>

                <div className="relative mt-12 lg:mt-20">
                <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                    <svg aria-hidden="true" viewBox="0 0 1200 120" className="w-full" preserveAspectRatio="none">
                    <path
                        d="M0,60 C200,10 400,110 600,60 C800,10 1000,110 1200,60"
                        fill="none"
                        stroke="rgba(255,255,255,0.16)"
                        strokeWidth="2"
                        strokeDasharray="2 10"
                        strokeLinecap="round"
                    />
                    </svg>
                </div>

                <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                    {HOME_STEPS.map((step, idx) => (
                    <div key={step.title}>
                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white/5 border-2 border-white/10 rounded-full shadow">
                        <span className="text-xl font-semibold text-stone-200">{idx + 1}</span>
                        </div>
                        <h3 className="mt-6 text-xl font-semibold leading-tight text-stone-100 md:mt-10">
                        {step.title}
                        </h3>
                        <p className="mt-4 text-base text-stone-300">{step.description}</p>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </section>

            <section id="testimonials" className="scroll-mt-28 text-center">
            <p className="mt-25 text-xs uppercase tracking-[0.35em] text-amber-300">Testimonials</p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-100 sm:text-4xl">
                Loved for its clarity
            </h2>
            <div className="relative mt-8 overflow-hidden rounded-3xl bg-white/5 px-2 py-10">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-slate-950 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-slate-950 to-transparent" />

                <div className="flex w-max gap-4" style={{ animation: "nv-marquee 35s linear infinite" }}>
                {[...HOME_TESTIMONIALS, ...HOME_TESTIMONIALS].map((t, i) => (
                    <figure
                    key={`${t.role}-${i}`}
                    className="w-[320px] shrink-0 rounded-3xl border border-white/10 bg-slate-950/35 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:w-95"
                    >
                    <blockquote className="text-sm leading-relaxed text-stone-200">"{t.quote}"</blockquote>
                    <figcaption className="mt-5 flex items-center justify-between gap-4 text-xs">
                        <span className="uppercase tracking-[0.25em] text-amber-300">{t.name}</span>
                        <span className="text-stone-300">{t.role}</span>
                    </figcaption>
                    </figure>
                ))}
                </div>
            </div>

            <div className="hidden">
                <figure className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <blockquote className="text-sm leading-relaxed text-stone-200">
                    “Finally, a place where my birth details and kundli records stay organized. It feels calm and easy
                    to use.”
                </blockquote>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.25em] text-amber-300">
                    User review
                </figcaption>
                </figure>
                <figure className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <blockquote className="text-sm leading-relaxed text-stone-200">
                    “The Sun sign, Moon sign, and nakshatra info is exactly what I wanted to see at a glance.”
                </blockquote>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.25em] text-amber-300">
                    Kundli generator
                </figcaption>
                </figure>
                <figure className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <blockquote className="text-sm leading-relaxed text-stone-200">
                    “Booking appointments and keeping everything in one account makes consultations much smoother.”
                </blockquote>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.25em] text-amber-300">
                    Consultation client
                </figcaption>
                </figure>
            </div>
            </section>

            <section id="team" className="scroll-mt-28">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                <h2 className="text-3xl font-bold leading-tight text-stone-100 sm:text-4xl xl:text-5xl">
                    Lead Astrologist
                </h2>
                </div>

                <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div className="relative overflow-hidden rounded-3xl">
                    <img
                    src="\public\Images\Hanshika_Tiwari.jpg"
                    alt="Lead astrologist"
                    className="aspect-4/5 w-full rounded-2xl object-cover"
                    />
                </div>

                <div className="pt-1">
                    <h3 className="text-3xl font-semibold text-stone-100">Hanshika Tiwari</h3>
                    <p className="mt-4 text-base leading-relaxed text-stone-300">
                    Hanshika is a Vedic astrologer known for combining classical principles with practical, modern
                    guidance. Her sessions focus on life timing, emotional clarity, and actionable next steps.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-stone-300">
                    She specializes in birth chart interpretation, moon sign psychology, nakshatra-based personality
                    insights, relationship compatibility, and career direction.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-stone-300">
                    Her approach is calm, compassionate, and easy to understand, helping clients turn complex chart
                    patterns into grounded decisions.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                        to="/appointment"
                        className="rounded-full bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-105"
                    >
                        Book Consultation
                    </Link>
                    <a
                        href="#contact"
                        className="rounded-full border border-white/15 bg-slate-950/40 px-6 py-3 text-sm font-medium text-stone-100 transition hover:bg-white/10"
                    >
                        Ask a Question
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section id="contact" className="scroll-mt-28">
            <div className="text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Contact Us</p>
                <h2 className="mt-4 text-3xl font-semibold text-stone-100 sm:text-4xl">Need help with your query?</h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-300">
                If you have any concern or question about kundli details, appointments, or reports, send us a message
                and we will get back to you soon.
                </p>
            </div>
            <div className="mt-8">
                <form onSubmit={(e) => e.preventDefault()} className="mx-auto max-w-2xl p-1">
                <label className="block text-sm font-medium text-stone-100">Email</label>
                <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-stone-100 outline-none placeholder:text-stone-400 focus:border-amber-300/50"
                />

                <label className="mt-5 block text-sm font-medium text-stone-100">Description</label>
                <textarea
                    required
                    rows="6"
                    placeholder="Describe your query..."
                    className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-stone-100 outline-none placeholder:text-stone-400 focus:border-amber-300/50"
                />

                <button
                    type="submit"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-105"
                >
                    Send Message
                </button>

                
                </form>
            </div>
            </section>
        </div>
        </main>

        <Footer />
        </>
        
    );
    }

    
    export default HomePage;

