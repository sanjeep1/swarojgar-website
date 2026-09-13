import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function Campus() {
    return (
        <section className="py-16 lg:py-20 bg-navy text-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1.5 rounded-full text-sm font-medium mb-5">
                            <MapPin size={14} className="text-primary" />
                            Kathmandu Central Campus
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-bold mb-5">
                            Visit Our Labs for Free Live Class Observation
                        </h2>

                        <p className="text-white/80 text-lg leading-relaxed mb-8">
                            Gongabu Chowk (Opposite to Kathmandu New Buspark
                            Complex), Ring Road, Kathmandu, Nepal. Walk-in
                            anytime Sunday through Friday from 7:00 AM to 6:00
                            PM for live laboratory inspections.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                    <Phone size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/60">
                                        Admissions Hotline
                                    </p>
                                    <p className="font-semibold text-lg">
                                        {CONTACT.phone}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                    <Mail size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/60">
                                        Official Email
                                    </p>
                                    <p className="font-semibold">
                                        {CONTACT.email}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                    <Clock size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/60">
                                        Visit Hours
                                    </p>
                                    <p className="font-semibold">
                                        Sunday – Friday • 7:00 AM – 6:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Map Placeholder */}
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-dark-navy aspect-4/3 lg:aspect-auto lg:h-105 relative">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                            <MapPin size={40} className="text-primary mb-4" />
                            <p className="font-semibold text-lg mb-1">
                                Gongabu Chowk • Kathmandu
                            </p>
                            <p className="text-white/60 text-sm max-w-xs">
                                Opposite to Kathmandu New Buspark Complex, Ring
                                Road
                            </p>
                            <a
                                href="https://maps.google.com/?q=Gongabu+Chowk+Kathmandu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                            >
                                Open in Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
