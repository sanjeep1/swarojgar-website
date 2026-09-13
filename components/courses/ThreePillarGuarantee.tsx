import { Cog, FlaskConical, Target } from "lucide-react";
import Image from "next/image";

const pillars = [
    {
        icon: FlaskConical,
        title: "Discover + Lab Use",
        description:
            "Unrestricted access to fully equipped commercial labs during training. Students work on real industry equipment from day one—not demonstrations or simulations.",
        image: "/images/chefsinkitchen.png",
    },
    {
        icon: Cog,
        title: "Heavy Commercial Machinery",
        description:
            "Train on the exact commercial-grade kitchen appliances, ovens, espresso machines, and industrial panels used in actual workplaces across Nepal and overseas.",
        image: "/images/chefsinkitchen.png",
    },
    {
        icon: Target,
        title: "Model-Test & Results Instruction",
        description:
            "Rigorous mock tests, practical evaluations, and CTEVT skill testing simulations ensure students achieve certifiable competency before graduation.",
        image: "/images/chefsinkitchen.png",
    },
];

export default function ThreePillarGuarantee() {
    return (
        <section className="py-16 lg:py-24 bg-off-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mb-12">
                    <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase mb-2.5 block">
                        TRAINING ASSURANCE
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 leading-snug mb-3">
                        Our 3-Pillar Practical Learning Guarantee
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Every student benefits from our non-negotiable training
                        assurance—real equipment, real evaluations, and real
                        results that translate directly to workplace confidence.
                    </p>
                </div>

                {/* 3 Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {pillars.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={pillar.title}
                                className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                            >
                                {/* Image */}
                                <div className="relative aspect-video bg-blue-light overflow-hidden">
                                    <Image
                                        src={pillar.image}
                                        alt={pillar.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="w-10 h-10 rounded-xl bg-orange-100/80 flex items-center justify-center text-primary mb-4">
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                        {pillar.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
