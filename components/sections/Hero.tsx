import { ArrowRight, CheckCircle2, Download, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative bg-off-white overflow-hidden">
            <div className="container mx-auto px-4 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 bg-peach-light text-primary px-3.5 py-1.5 rounded-full text-sm font-medium">
                            {" "}
                            <CheckCircle2 size={16} />
                            CTEVT Affiliated & DOFE Approved
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                            Master Industry-Ready{" "}
                            <span className="text-orange-500">
                                Vocational Skills
                            </span>{" "}
                            for Nepal & Overseas Careers
                        </h1>

                        <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                            Accelerate your pathway into commercial cookery,
                            barista craft, five-star hospitality, and
                            specialized trades. Certified hands-on practical
                            diplomas with CTEVT curriculum alignment and direct
                            industry readiness.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <Button
                                size="lg"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                            >
                                Explore 2025 Intakes
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="border-slate-300 hover:bg-slate-50"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Download Syllabus (PDF)
                            </Button>
                        </div>

                        {/* Ratings & Stats */}
                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <div className="flex items-center gap-2">
                                <div className="flex text-orange-400">
                                    {[1, 2, 3, 4, 5].map((rating_star) => (
                                        <Star
                                            key={`star-${rating_star}`}
                                            size={16}
                                            fill="currentColor"
                                        />
                                    ))}
                                </div>
                                <span className="font-semibold text-slate-900">
                                    4.9/5.0
                                </span>
                            </div>

                            <div className="h-6 w-px bg-slate-200 hidden sm:block" />

                            <div className="text-sm">
                                <span className="font-bold text-slate-900">
                                    4.2k+
                                </span>
                                <span className="text-slate-500 ml-1">
                                    Verified Graduate Success Rate
                                </span>
                            </div>

                            <div className="h-6 w-px bg-slate-200 hidden sm:block" />
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            {/* Placeholder Image - Replace later with real image */}
                            <div className="aspect-4/3 bg-slate-200 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                    <Image
                                        src="/images/chefsinkitchen.png"
                                        alt="Chefs in Kitchen"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* GOVT. VERIFIED Badge */}
                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                <span className="text-xs font-semibold text-slate-800">
                                    GOVT. VERIFIED
                                </span>
                            </div>

                            {/* Bottom Overlay Card */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <CheckCircle2
                                            className="text-orange-600"
                                            size={20}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 text-sm">
                                            100% Practical In-Lab Sessions
                                        </p>
                                        <p className="text-xs text-slate-500">
                                            Hands-On Practical Training &
                                            Workshop Mastery
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -z-10 -bottom-6 -right-6 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-60" />
                    </div>
                </div>
            </div>
        </section>
    );
}
