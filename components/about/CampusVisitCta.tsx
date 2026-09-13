import { CheckCircle2, ExternalLink, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function CampusVisitCta() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-[#0B1C30] grid lg:grid-cols-12">
                    {/* Left Details Column */}
                    <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 text-white flex flex-col justify-between">
                        <div>
                            <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase mb-3 block">
                                VISIT OUR TRAINING CAMPUS
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
                                Tour Our Gongabu Labs Before You Decide
                            </h2>
                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                                We encourage prospective students and parents to
                                visit our premises before applying. Observe
                                active classes, inspect our commercial-grade
                                equipment, speak directly with faculty, and
                                understand how our hands-on methodology works.
                            </p>

                            {/* 3 Value Checks */}
                            <div className="space-y-3.5 mb-10">
                                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                                    <div className="w-5 h-5 rounded-full bg-orange-500/20 text-primary flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={14} />
                                    </div>
                                    <span>
                                        No-obligation consultation & career
                                        course guidance
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                                    <div className="w-5 h-5 rounded-full bg-orange-500/20 text-primary flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={14} />
                                    </div>
                                    <span>
                                        Live class inspection across culinary &
                                        technical labs
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                                    <div className="w-5 h-5 rounded-full bg-orange-500/20 text-primary flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={14} />
                                    </div>
                                    <span>
                                        Meet faculty one-on-one before
                                        enrollment
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <a
                                href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
                                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-lg shadow-orange-950/30 transition-colors"
                            >
                                <Phone size={16} />
                                <span>Schedule a Visit: {CONTACT.phone}</span>
                            </a>

                            <a
                                href="https://maps.google.com/?q=Gongabu+Chowk+Kathmandu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-5 py-3.5 rounded-xl text-xs sm:text-sm border border-white/20 transition-colors"
                            >
                                <MapPin size={16} className="text-primary" />
                                <span>View Campus Location Map</span>
                                <ExternalLink
                                    size={13}
                                    className="text-slate-400"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Right Map Column */}
                    <div className="lg:col-span-5 relative min-h-95 lg:min-h-full bg-slate-900 overflow-hidden">
                        {/* Interactive Google Maps iframe showing Gongabu Chowk */}
                        <iframe
                            title="Swarojgar Talim Kendra Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.6253457962383!2d85.31123437599026!3d27.73456722453531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1920875b4815%3A0xb355653b47c0b05b!2sGongabu%20Chowk%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1710000000000!5m2!1sen!2snp"
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                filter: "contrast(1.05) saturate(1.1)",
                            }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full min-h-100 object-cover"
                        />

                        {/* Floating Campus Info Card */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-200">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary uppercase tracking-wider mb-1">
                                        <span className="w-2 h-2 rounded-full bg-primary" />
                                        Central Training Campus
                                    </div>
                                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                                        Gongabu Talim Kendra Building
                                    </h4>
                                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                        Opposite BG Mall, Gongabu Chowk, Ring
                                        Road, Kathmandu
                                    </p>
                                </div>
                                <a
                                    href="https://maps.google.com/?q=Gongabu+Chowk+Kathmandu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-xl bg-orange-50 text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center shrink-0 border border-orange-200/60 shadow-2xs"
                                    aria-label="Open in Google Maps"
                                >
                                    <MapPin size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
