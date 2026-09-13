import { Briefcase, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function FacultyMentors() {
    const faculty = [
        {
            name: "Chef Roshan Adhikari",
            role: "Head of Culinary Arts & Continental Cuisine",
            badge: "CHEF INSTRUCTOR — CULINARY ARTS",
            image: "/images/instructors/roshan-adhikari.jpg",
            bio: "14+ years executive chef experience across leading 5-star properties in Dubai and Kathmandu. Specialized in commercial kitchen management, HACCP food hygiene protocols, and high-volume banquet operations.",
            credential: "14+ Years Industry Experience — Ex-Hotel Hyatt",
        },
        {
            name: "Sunil Karmacharya",
            role: "Specialty Coffee & Barista Lead Instructor",
            badge: "HEAD BARISTA & COFFEE ROASTING",
            image: "/images/instructors/sunil-karmacharya.jpg",
            bio: "Specialty Coffee Association (SCA) certified barista with 9+ years managing specialty cafes and training championship baristas. Expert in extraction science, milk texturing, palate calibration, and commercial espresso maintenance.",
            credential: "SCA Certified Trainer — 9+ Years Field Exp",
        },
        {
            name: "Pooja Thapa Shrestha",
            role: "Head of Hospitality & Front Desk Management",
            badge: "HOSPITALITY LEAD INSTRUCTOR",
            image: "/images/instructors/pooja-shrestha.jpg",
            bio: "Over 11 years managing front-of-house operations and guest services for premier luxury hotel brands in Nepal and Qatar. Focuses on interpersonal communication, complaint resolution systems, reservation software, and five-star service etiquette.",
            credential: "Former Front Office Manager — Radisson Hotel Group",
        },
    ];

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 lg:mb-14">
                    <div>
                        <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase mb-2 block">
                            FACULTY & CRAFT MENTORS
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 tracking-tight">
                            Learn Directly from Veteran Practitioners
                        </h2>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-[#FFF4ED] text-primary-dark border border-orange-200/80 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold self-start md:self-auto shadow-2xs">
                        <ShieldCheck size={16} className="text-primary" />
                        <span>100% Certified Technical Instructors</span>
                    </div>
                </div>

                {/* 3 Faculty Cards */}
                <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                    {faculty.map((mentor) => (
                        <div
                            key={mentor.name}
                            className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                {/* Instructor Portrait */}
                                <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                                    <Image
                                        src={mentor.image}
                                        alt={mentor.name}
                                        fill
                                        className="object-cover group-hover:scale-103 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
                                    {/* Role Badge on Image */}
                                    <div className="absolute bottom-3 left-3">
                                        <span className="inline-block bg-slate-900/90 backdrop-blur-xs text-white text-[10px] sm:text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-md uppercase border border-white/10">
                                            {mentor.badge}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="p-6 pb-4">
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                                        {mentor.name}
                                    </h3>
                                    <p className="text-xs sm:text-sm font-semibold text-primary-dark mt-1 mb-3">
                                        {mentor.role}
                                    </p>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {mentor.bio}
                                    </p>
                                </div>
                            </div>

                            {/* Footer Credential */}
                            <div className="px-6 pb-6 pt-3">
                                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600 font-medium">
                                    <Briefcase
                                        size={14}
                                        className="text-primary shrink-0"
                                    />
                                    <span className="truncate">
                                        {mentor.credential}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
