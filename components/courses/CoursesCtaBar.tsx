import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export default function CoursesCtaBar() {
    return (
        <section className="py-10 lg:py-14 bg-[#0B1C30] relative overflow-hidden">
            {/* Ambient background */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white text-center lg:text-left">
                        Reserve Your Practical Station for Upcoming Intake
                    </h2>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-lg shadow-orange-950/30 transition-colors"
                        >
                            <span>Self-enroll Myself</span>
                            <ArrowRight size={16} />
                        </Link>

                        <Link
                            href="/courses"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-5 py-3.5 rounded-xl text-xs sm:text-sm border border-white/20 transition-colors"
                        >
                            <FileText size={16} className="text-slate-300" />
                            <span>Comparison Guides & Insights</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
