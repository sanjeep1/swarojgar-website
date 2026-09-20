import { ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export default function CoursesCtaBar() {
    return (
        <section className="py-12 lg:py-16 bg-[#0B1C30] relative overflow-hidden text-white border-t border-white/10">
            {/* Ambient background blur */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Text block */}
                    <div className="max-w-2xl text-center lg:text-left space-y-2">
                        <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase inline-block">
                            ENROLLMENT CLOSING SOON
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            Reserve Your Practical Station for Upcoming Intake
                        </h2>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                            Batch sizes are strictly capped at 16 students to
                            ensure 1:1 workstation access. Next intake starts 1st
                            of next month.
                        </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
                        <a
                            href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
                            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-5 py-3.5 rounded-xl text-sm border border-white/20 transition-colors"
                        >
                            <PhoneCall size={16} className="text-slate-300" />
                            <span>Talk With Counselor</span>
                        </a>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-lg shadow-orange-950/30 transition-colors"
                        >
                            <span>Apply for Admission</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
