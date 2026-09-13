import { Award, Building2, Users } from "lucide-react";

export default function MilestonesTimeline() {
    const milestones = [
        {
            year: "2013",
            icon: Building2,
            title: "Foundational Gongabu Classes",
            description:
                "Founded with a single electrical laboratory in Gongabu, determined to provide an alternative to purely academic education. First batch of 24 students achieved 100% placement within 90 days.",
            phase: "Phase 01: The Foundation (Kathmandu)",
        },
        {
            year: "2018",
            icon: Award,
            title: "CTEVT National Accreditation",
            description:
                "Accredited by Council for Technical Education and Vocational Training (CTEVT), aligning our curriculum with national occupational standards and enabling recognized certificate issuance.",
            phase: "Phase 02: Standardized Certification",
        },
        {
            year: "2025",
            icon: Users,
            title: "4,500+ Empowered Alumni",
            description:
                "Over four thousand five hundred graduates working across Nepal and the Gulf Cooperation Council (GCC) countries as licensed technicians, master bakers, executive chefs, and small business owners.",
            phase: "Phase 03: Scale & Industry Leadership",
        },
    ];

    return (
        <section className="py-16 lg:py-24 bg-[#FAFBFD] border-y border-slate-100">
            <div className="container mx-auto px-4">
                {/* Header Row */}
                <div className="grid lg:grid-cols-12 gap-6 items-end mb-12 lg:mb-14">
                    <div className="lg:col-span-7">
                        <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase mb-2 block">
                            DECADE OF PRACTICAL EXCELLENCE
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 tracking-tight">
                            A Decade of Practical Leadership in Kathmandu
                        </h2>
                    </div>
                    <div className="lg:col-span-5">
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            Built from the ground up in Kathmandu to meet
                            genuine market demand, our institution has grown
                            through relentless focus on craft, infrastructure
                            investment, and employer trust across Nepal and
                            overseas.
                        </p>
                    </div>
                </div>

                {/* Milestones 3-Card Grid */}
                <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                    {milestones.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.year}
                                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
                            >
                                <div>
                                    {/* Top Row: Year & Icon */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
                                            {item.year}
                                        </span>
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                                            <Icon size={20} />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-4 mb-2.5">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Phase Tag */}
                                <div className="mt-6 pt-4 border-t border-slate-100">
                                    <span className="inline-block text-[11px] sm:text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-md">
                                        {item.phase}
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
