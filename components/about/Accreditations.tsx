import { ExternalLink, Landmark, ShieldCheck, Utensils } from "lucide-react";

export default function Accreditations() {
    const accreditations = [
        {
            icon: ShieldCheck,
            title: "CTEVT Registered Institute",
            subtitle: "Council for Technical Education & Vocational Training",
            specs: [
                { label: "Affiliation Code", value: "#74102-KTM" },
                { label: "National Framework", value: "NVQS Level 1 & 2" },
                { label: "Certified Since", value: "2018 (Renewed)" },
                { label: "Authority Status", value: "Active & Approved" },
            ],
        },
        {
            icon: Landmark,
            title: "Government of Nepal",
            subtitle: "Ministry of Education & Industry",
            specs: [
                { label: "Company Regd.", value: "#173496/074/075" },
                { label: "PAN / VAT Record", value: "#606821890" },
                { label: "Operating License", value: "KMC Ward 26" },
                { label: "Labour Verification", value: "Approved Partner" },
            ],
        },
        {
            icon: Utensils,
            title: "Food Hygiene Standard",
            subtitle: "Hospitality Training Certification",
            specs: [
                { label: "Safety Framework", value: "Codex & HACCP" },
                { label: "Electrical Protocol", value: "NEA Safety Passed" },
                { label: "Workshop Audit", value: "Bi-annual Verified" },
                { label: "Student Coverage", value: "Active Lab Safety" },
            ],
        },
    ];

    return (
        <section className="py-16 lg:py-24 bg-[#FAFBFD] border-t border-slate-100">
            <div className="container mx-auto px-4">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 lg:mb-14">
                    <div>
                        <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase mb-2 block">
                            OFFICIAL ACCREDITATION & COMPLIANCE
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 tracking-tight">
                            Official Accreditations & Digital Validation Seals
                        </h2>
                    </div>

                    <a
                        href="https://ctevt.org.np"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#0B1C30] hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-700 shadow-2xs self-start md:self-auto transition-colors"
                    >
                        <span>CTEVT Institutional Verification</span>
                        <ExternalLink size={13} className="text-slate-400" />
                    </a>
                </div>

                {/* 3 Accreditation Cards */}
                <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                    {accreditations.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="bg-[#F6F9FE] border border-blue-100/80 rounded-2xl p-6 sm:p-7 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
                            >
                                <div>
                                    {/* Card Header with Icon */}
                                    <div className="flex items-start gap-3.5 mb-5">
                                        <div className="w-11 h-11 rounded-xl bg-white border border-orange-100 text-primary flex items-center justify-center shrink-0 shadow-2xs">
                                            <Icon size={22} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Specs Table */}
                                    <div className="space-y-2.5 pt-2 border-t border-slate-200/60">
                                        {item.specs.map((spec) => (
                                            <div
                                                key={spec.label}
                                                className="flex items-center justify-between text-xs py-1"
                                            >
                                                <span className="text-slate-500 font-medium">
                                                    {spec.label}
                                                </span>
                                                <span className="font-bold text-slate-900 bg-white/70 px-2 py-0.5 rounded border border-slate-200/50">
                                                    {spec.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
