import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export default function ContactHero() {
    return (
        <section className="relative bg-[#0B1C30] text-white overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-20">
            {/* Ambient background glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-6">
                    <ol className="flex items-center gap-2 text-xs font-medium text-slate-400">
                        <li>
                            <Link
                                href="/"
                                className="hover:text-white transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <li>/</li>
                        <li className="text-emerald-400 font-semibold">
                            Contact Us
                        </li>
                    </ol>
                </nav>

                <div className="max-w-3xl space-y-4">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        ADMISSIONS OFFICE • KATHMANDU CAMPUS
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                        We&apos;re Here to Guide Your Career Pathway
                    </h1>

                    <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                        Have questions regarding course modules, CTEVT national
                        skill testing, upcoming batch shifts, or foreign
                        employment pathways? Reach out to our career counseling
                        desk or visit our campus for a live lab tour.
                    </p>
                </div>

                {/* Quick Info Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary shrink-0">
                            <Phone size={18} />
                        </div>
                        <div>
                            <span className="text-[11px] text-slate-400 uppercase font-semibold block">
                                Admissions Hotline
                            </span>
                            <span className="text-sm font-bold text-white">
                                {CONTACT.phone}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                            <Clock size={18} />
                        </div>
                        <div>
                            <span className="text-[11px] text-slate-400 uppercase font-semibold block">
                                Counseling Hours
                            </span>
                            <span className="text-sm font-bold text-white">
                                Sun – Fri: 7:00 AM – 6:00 PM
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 shrink-0">
                            <MapPin size={18} />
                        </div>
                        <div>
                            <span className="text-[11px] text-slate-400 uppercase font-semibold block">
                                Campus Hub
                            </span>
                            <span className="text-sm font-bold text-white truncate max-w-xs block">
                                Gongabu Chowk, Kathmandu
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
