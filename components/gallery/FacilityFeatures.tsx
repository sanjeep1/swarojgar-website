import {
    CheckCircle2,
    ShieldCheck,
    Sparkles,
    Utensils,
    Wrench,
} from "lucide-react";

const features = [
    {
        icon: Utensils,
        title: "1 Trainee : 1 Station Guarantee",
        description:
            "Every admitted student operates their own dedicated burner, prep counter, and commercial toolset. Zero sharing during active practical hours.",
    },
    {
        icon: Wrench,
        title: "Industrial-Spec Commercial Hardware",
        description:
            "Train directly on the heavy-duty machinery deployed across 5-star international hotels: multi-group espresso machines, combi-steamers, and deck ovens.",
    },
    {
        icon: ShieldCheck,
        title: "Strict Food Safety & HACCP Lab Standards",
        description:
            "Labs are sanitized under international hazard analysis and critical control points protocols, preparing students for luxury hygiene audits.",
    },
    {
        icon: Sparkles,
        title: "Daily Fresh Ingredients Included",
        description:
            "100% of practical meats, fresh produce, dairy, syrups, and specialty coffee beans are stocked daily with no hidden lab charges.",
    },
];

export default function FacilityFeatures() {
    return (
        <section className="py-16 lg:py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase mb-2 block">
                        UNCOMPROMISING INFRASTRUCTURE
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                        Why Our Labs Produce Day-One Employable Trainees
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We reject chalkboards and passive observational
                        lectures. Our facilities are engineered to replicate
                        commercial hospitality workplaces.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feat) => {
                        const Icon = feat.icon;
                        return (
                            <div
                                key={feat.title}
                                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-primary flex items-center justify-center mb-5">
                                    <Icon size={24} />
                                </div>
                                <h3 className="font-extrabold text-slate-900 text-base mb-2">
                                    {feat.title}
                                </h3>
                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                    {feat.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
