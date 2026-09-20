import { Award, Building2, Flame, Users } from "lucide-react";

const stats = [
    {
        label: "Dedicated Practical Wings",
        value: "4 Specialized Labs",
        icon: Building2,
    },
    {
        label: "Equipment Runtime",
        value: "1:1 Station Access",
        icon: Flame,
    },
    {
        label: "Testing Accreditation",
        value: "CTEVT NSTB Center",
        icon: Award,
    },
    {
        label: "Kathmandu Central Campus",
        value: "Gongabu Chowk",
        icon: Users,
    },
];

export default function GalleryHero() {
    return (
        <section className="relative bg-[#0B1C30] text-white overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20">
            {/* Ambient background glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Top Label */}
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-4 tracking-wider uppercase">
                    <span>CAMPUS & LAB WORKSHOPS</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-300">Visual Facility Tour</span>
                </div>

                <div className="max-w-3xl space-y-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                        Inside Our Real-World Training Facilities
                    </h1>
                    <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                        Take a visual walkthrough of our high-volume commercial
                        kitchens, Italian dual-boiler espresso bars, 5-star
                        model hotel suites, and clinical caregiving labs in
                        Gongabu, Kathmandu.
                    </p>
                </div>

                {/* Highlights Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-8 border-t border-white/10">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div key={stat.label} className="text-left">
                                <div className="flex items-center gap-2 mb-1">
                                    <Icon
                                        size={18}
                                        className="text-primary shrink-0"
                                    />
                                    <span className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                                        {stat.value}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-400 leading-snug">
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
