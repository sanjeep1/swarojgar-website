import { Award, Layers, TrendingUp, Users, ShieldCheck } from "lucide-react";

const stats = [
    {
        value: "85%",
        label: "Employment Success Rate",
        icon: TrendingUp,
        highlight: false,
    },
    {
        value: "1:1",
        label: "Real Commercial Workstations",
        icon: Users,
        highlight: false,
    },
    {
        value: "6 Tiers",
        label: "CTEVT Certified Level Framework",
        icon: Layers,
        highlight: true,
    },
    {
        value: "12+",
        label: "Certified Master Trainers",
        icon: Award,
        highlight: false,
    },
];

export default function CoursesHero() {
    return (
        <section className="relative bg-[#0B1C30] text-white overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-28">
            {/* Ambient background blurs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Breadcrumb / Top label */}
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-4 tracking-wider uppercase">
                    <span>CTEVT-AFFILIATED VOCATIONAL PATHWAYS</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-300">Complete Course Index</span>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-8 space-y-4">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                            Industry-Calibrated Vocational Programs
                        </h1>

                        <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                            Rigorous hands-on curricula with continuous practical
                            evaluation, certified to launch global careers in
                            high-demand trades across commercial cookery, European
                            pastry, specialty coffee craft, hotel operations, and
                            certified caregiving.
                        </p>
                    </div>

                    {/* Right Accreditation Card */}
                    <div className="lg:col-span-4">
                        <div className="bg-[#102035] border border-white/15 rounded-2xl p-6 shadow-xl relative overflow-hidden backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">
                                    ACCREDITATION DETAILS
                                </span>
                            </div>

                            <div className="flex items-center gap-2.5 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-primary shrink-0">
                                    <ShieldCheck size={18} />
                                </div>
                                <h3 className="font-bold text-white text-base sm:text-lg">
                                    CTEVT Aligned Standard
                                </h3>
                            </div>

                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                All vocational trades follow national curricula
                                aligned with Council for Technical Education and
                                Vocational Training (CTEVT) guidelines.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-12 pt-8 border-t border-white/10">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div key={stat.label} className="text-left">
                                <div className="flex items-center gap-2 mb-1">
                                    <Icon
                                        size={18}
                                        className={
                                            stat.highlight
                                                ? "text-emerald-400"
                                                : "text-primary"
                                        }
                                    />
                                    <span
                                        className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                                            stat.highlight
                                                ? "text-emerald-400"
                                                : "text-white"
                                        }`}
                                    >
                                        {stat.value}
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-400 leading-snug">
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
