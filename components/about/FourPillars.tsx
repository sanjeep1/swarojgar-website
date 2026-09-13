import { ArrowRight, Award, Cpu, GraduationCap, Wrench } from "lucide-react";

export default function FourPillars() {
    const pillars = [
        {
            icon: Wrench,
            iconBg: "bg-[#FD651E] text-white shadow-md shadow-orange-950/40",
            title: "100% Hands-On Machines",
            description:
                "Students train on exact industrial appliances they will operate in actual jobs—not scaled-down student toys or simulated computer models.",
            standard: "Standard 1: Real Tools",
            standardColor: "text-[#FD651E]",
        },
        {
            icon: GraduationCap,
            iconBg: "bg-white/10 text-white border border-white/15",
            title: "Master Industry Instructors",
            description:
                "Courses are taught exclusively by practitioners with at least 8+ years of active field or kitchen experience, not career academic lecturers.",
            standard: "Standard 2: Expert Faculty",
            standardColor: "text-slate-300 group-hover:text-white",
        },
        {
            icon: Cpu,
            iconBg: "bg-[#FD651E] text-white shadow-md shadow-orange-950/40",
            title: "Commercial-Grade Machinery",
            description:
                "From 3-group espresso machines to commercial convection ovens and 3-phase industrial panels—our workshop equipment matches industry standard.",
            standard: "Standard 3: Pro Hardware",
            standardColor: "text-[#FD651E]",
        },
        {
            icon: Award,
            iconBg: "bg-white/10 text-white border border-white/15",
            title: "CTEVT Standardized Curriculum",
            description:
                "Every curriculum is rigorously aligned with CTEVT national occupational skill standards, preparing students for official national licensing and migration skill tests.",
            standard: "Standard 4: National Merit",
            standardColor: "text-slate-300 group-hover:text-white",
        },
    ];

    return (
        <section className="py-16 lg:py-24 bg-[#0B1C30] text-white relative overflow-hidden">
            {/* Background ambient lighting */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase mb-2.5 block">
                        INSTRUCTIONAL FOUNDATION
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight mb-3">
                        Four Pillars of Instructional Rigor
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                        Every course at Swarojgar is structured around four
                        non-negotiable operational principles that guarantee
                        workplace readiness.
                    </p>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={pillar.title}
                                className="bg-[#112239] hover:bg-[#152a47] border border-white/10 hover:border-orange-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 group shadow-lg"
                            >
                                <div>
                                    {/* Icon Badge */}
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${pillar.iconBg}`}
                                    >
                                        <Icon size={22} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-white">
                                        {pillar.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                                        {pillar.description}
                                    </p>
                                </div>

                                {/* Bottom Tag */}
                                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                    <span
                                        className={`text-xs font-semibold flex items-center gap-1.5 transition-colors ${pillar.standardColor}`}
                                    >
                                        {pillar.standard}
                                        <ArrowRight
                                            size={14}
                                            className="group-hover:translate-x-1 transition-transform"
                                        />
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
