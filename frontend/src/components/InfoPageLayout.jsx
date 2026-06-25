import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function InfoPageLayout({ eyebrow, title, subtitle, children }) {
    return (
        <>
            <div className="min-h-screen bg-slate-950 text-stone-100">
                <Navbar />
                <main className="px-4 pb-16 pt-12 sm:pt-16">
                    <section className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
                        <p className="text-xs uppercase tracking-[0.35em] text-amber-300">{eyebrow}</p>
                        <h1 className="mt-3 text-3xl font-semibold text-stone-100 sm:text-5xl">{title}</h1>
                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-300">{subtitle}</p>
                    </section>
                    <div className="mx-auto mt-8 max-w-6xl space-y-8">{children}</div>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default InfoPageLayout;
