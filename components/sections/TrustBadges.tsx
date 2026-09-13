import { Award, Clock, FlaskConical, Hand, Users } from "lucide-react";

const badges = [
    {
        icon: Award,
        title: "CTEVT Affiliated",
        description: "Curriculum standard aligned",
    },
    {
        icon: Clock,
        title: "10+ Years Legacy",
        description: "4,200+ certified alumni",
    },
    {
        icon: FlaskConical,
        title: "Modern Labs",
        description: "Commercial grade stations",
    },
    {
        icon: Hand,
        title: "100% Practical",
        description: "Hands-on daily workstation time",
    },
    {
        icon: Users,
        title: "Certified Mentors",
        description: "Master culinary & craft trainers",
    },
];

export default function TrustBadges() {
    return (
        <section className="bg-navy text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
                    {badges.map((badge) => {
                        const Icon = badge.icon;
                        return (
                            <div
                                key={badge.title}
                                className="flex flex-col items-center text-center gap-3"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm sm:text-base">
                                        {badge.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-white/70 mt-1">
                                        {badge.description}
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
