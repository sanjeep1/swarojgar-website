import { Award, Compass, ShieldCheck } from "lucide-react";

export default function AboutHero() {
    return (
        <section className="relative bg-linear-to-b from-[#F2F6FC] via-[#F8FAFD] to-white py-14 lg:py-20 border-b border-slate-100 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    {/* Left Narrative Column */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Top Pill Badge */}
                        <div className="inline-flex items-center gap-2.5 bg-white border border-blue-100/80 px-4 py-1.5 rounded-full shadow-xs">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs font-bold text-slate-700 tracking-wider uppercase">
                                About Swarojgar Talim Kendra
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.18] tracking-tight">
                            Empowering Nepali Youth Through Practical
                            Self-Reliance{" "}
                            <span className="text-primary">(Swarojgar)</span>
                        </h1>

                        {/* Body Narrative */}
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                            Established in Kathmandu, Swarojgar Talim Kendra has
                            spent over a decade transforming ambitions into
                            sustainable careers. We believe real capability
                            comes from doing, not just observing. Our labs are
                            built to replicate actual work environments—from
                            commercial kitchens to high-voltage electrical
                            installations.
                        </p>
                    </div>

                    {/* Right High-Impact Dark Card */}
                    <div className="lg:col-span-5">
                        <div className="relative bg-[#0B1C30] border border-slate-800 rounded-3xl p-7 sm:p-9 shadow-2xl overflow-hidden group">
                            {/* Decorative ambient background blur */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                            <div className="relative z-10 flex flex-col justify-between h-full">
                                {/* Top Header Row */}
                                <div className="flex items-center justify-between gap-2 mb-6">
                                    <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded-full">
                                        <Compass
                                            size={13}
                                            className="text-emerald-400"
                                        />
                                        Established in Kathmandu
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
                                        <Award size={15} />
                                    </div>
                                </div>

                                {/* Stat Number */}
                                <div>
                                    <div className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none mb-3">
                                        12+ Years
                                    </div>
                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                                        Dedicated to practical vocational
                                        training, producing job-ready
                                        technicians & culinary professionals
                                        across Nepal and internationally.
                                    </p>
                                </div>

                                {/* Bottom Tag */}
                                <div className="pt-4 border-t border-white/10">
                                    <div className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-2 rounded-xl text-white text-xs sm:text-sm font-semibold transition-colors">
                                        <ShieldCheck
                                            size={17}
                                            className="text-emerald-400 shrink-0"
                                        />
                                        <span>
                                            CTEVT Certified Technical
                                            Instructors
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
