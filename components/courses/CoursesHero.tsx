import { Award, CheckCircle2, Layers, TrendingUp, Users } from "lucide-react";

const stats = [
    {
        value: "85%",
        label: "Employment Rate After 60 Days",
        icon: TrendingUp,
    },
    {
        value: "1:1",
        label: "Instructor to Student Practical Ratio",
        icon: Users,
    },
    {
        value: "6 Tiers",
        label: "Distinct Modular Career Pathways",
        icon: Layers,
    },
    {
        value: "12+",
        label: "Years of Vocational Training Legacy",
        icon: Award,
    },
];

export default function CoursesHero() {
    return (
        <section className="relative bg-[#0B1C30] text-white overflow-hidden py-16 lg:py-24">
            {/* Ambient background blurs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-6">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                            Industry-Calibrated{" "}
                            <span className="text-primary">Vocational</span>{" "}
                            Programs
                        </h1>

                        <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                            Master globally recognized practical skills through
                            CTEVT-accredited programs. Curriculum designed to
                            produce employable professionals with commercial
                            kitchen, hospitality, and specialized trade
                            competencies.
                        </p>
                    </div>

                    {/* Right Badge */}
                    <div className="lg:col-span-5 flex lg:justify-end">
                        <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/15 px-4 py-2.5 rounded-xl text-white text-xs sm:text-sm font-semibold">
                            <CheckCircle2
                                size={16}
                                className="text-emerald-400 shrink-0"
                            />
                            <span>CTEVT Affiliated • Municipal</span>
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-12 pt-10 border-t border-white/10">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div key={stat.label} className="text-center sm:text-left">
                                <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                                    <Icon
                                        size={18}
                                        className="text-primary"
                                    />
                                    <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                        {stat.value}
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
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
