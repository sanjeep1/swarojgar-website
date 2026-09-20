import { ArrowRight, ChefHat, Cpu, UserCheck } from "lucide-react";
import Link from "next/link";

const pillars = [
    {
        icon: UserCheck,
        iconBg: "bg-blue-50 text-blue-600 border border-blue-100",
        title: "1 Student : 1 Station",
        description:
            "Zero sharing of equipment during practical sessions. Every student gets their own burner, cutting station, espresso machine group head, or care patient dummy.",
        linkText: "Explore facility layout and lab equipment",
        href: "/about#campus",
    },
    {
        icon: Cpu,
        iconBg: "bg-cyan-50 text-cyan-600 border border-cyan-100",
        title: "Heavy Commercial Machinery",
        description:
            "Train directly on the equipment found in 5-star hotels and specialty cafés—commercial multi-group espresso machines, bakery deck ovens, and heavy-duty cooktops.",
        linkText: "View our industrial equipment inventory",
        href: "/about#pillars",
    },
    {
        icon: ChefHat,
        iconBg: "bg-orange-50 text-orange-600 border border-orange-100",
        title: "Master Chef & Trade Instructors",
        description:
            "Learn from seasoned industry professionals with minimum 8+ years experience in high-end international restaurants, cruise ships, luxury hotels, and hospitals.",
        linkText: "Meet our full-time instructor team",
        href: "/about#instructors",
    },
];

export default function ThreePillarGuarantee() {
    return (
        <section className="py-16 lg:py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mb-12">
                    <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase mb-2 block">
                        HANDS-ON FIRST TRAINING
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 leading-snug mb-3">
                        Our 3-Pillar Practical Learning Guarantee
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Every curriculum is built around practical, real-world
                        experience, ensuring students graduate ready for immediate
                        employment.
                    </p>
                </div>

                {/* 3 Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {pillars.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={pillar.title}
                                className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${pillar.iconBg}`}
                                    >
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl mb-3">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        {pillar.description}
                                    </p>
                                </div>

                                <div>
                                    <Link
                                        href={pillar.href}
                                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-primary transition-colors group"
                                    >
                                        <span>{pillar.linkText}</span>
                                        <ArrowRight
                                            size={14}
                                            className="group-hover:translate-x-1 transition-transform"
                                        />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
