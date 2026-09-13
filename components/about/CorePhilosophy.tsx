import { AlertCircle, Camera, CheckCircle, Repeat, Wrench } from "lucide-react";
import Image from "next/image";

export default function CorePhilosophy() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
                    {/* Left Column: Core Philosophy */}
                    <div className="lg:col-span-6 space-y-6">
                        <div>
                            <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase mb-2 block">
                                OUR CORE PHILOSOPHY
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 leading-snug">
                                Capability Precedes Theory: Why Blackboards
                                Don&apos;t Build Careers
                            </h2>
                        </div>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            Traditional vocational education often fails by
                            prioritizing textbook theories over tactile,
                            real-world execution. At Swarojgar, we invert this
                            flawed model. Every theoretical principle is taught
                            only in direct support of an immediate physical
                            skill—ensuring graduates possess reflex muscle
                            memory, rapid diagnostic capability, and the
                            confidence to operate autonomously on day one of
                            employment.
                        </p>

                        {/* 3 Callout Cards */}
                        <div className="space-y-3.5 pt-2">
                            {/* Callout 1 */}
                            <div className="flex items-start gap-4 p-4 sm:p-4.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-orange-200 transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-orange-100/80 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                    <AlertCircle size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                                        Zero Unnecessary Academic Padding
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        No filler courses or archaic theory.
                                        100% of curriculum time is invested in
                                        skills employers actually pay for and
                                        evaluate on job sites.
                                    </p>
                                </div>
                            </div>

                            {/* Callout 2 */}
                            <div className="flex items-start gap-4 p-4 sm:p-4.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-orange-200 transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-orange-100/80 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                    <Repeat size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                                        Repetition Until Muscle Memory
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        Performing a task once isn&apos;t
                                        learning. Our students repeat core
                                        procedures dozens of times under
                                        supervision until execution becomes
                                        second nature.
                                    </p>
                                </div>
                            </div>

                            {/* Callout 3 */}
                            <div className="flex items-start gap-4 p-4 sm:p-4.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-orange-200 transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-orange-100/80 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                    <Wrench size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                                        Fault Simulation & Troubleshooting
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        We intentionally induce equipment
                                        malfunctions and real-world anomalies so
                                        students learn how to diagnose and
                                        resolve problems calmly under pressure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Curriculum Breakdown & Practical Ratio */}
                    <div className="lg:col-span-6 space-y-6">
                        <div>
                            <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase mb-2 block">
                                CURRICULUM BREAKDOWN
                            </span>
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                                    Practical Skill Ratio
                                </h2>
                                <span className="inline-flex items-center gap-1.5 bg-[#002517] text-success-light border border-[#004A2F] text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full">
                                    <CheckCircle
                                        size={12}
                                        className="text-success-light"
                                    />
                                    Job-Ready Competency Standard
                                </span>
                            </div>
                        </div>

                        {/* 3 Metric Cards */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-4">
                            {/* Metric 1 */}
                            <div className="bg-[#F8FAFD] border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-2xs hover:shadow-xs transition-shadow">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[3.5px] border-primary flex items-center justify-center font-black text-slate-900 text-base sm:text-xl bg-white shadow-xs">
                                    65%
                                </div>
                                <h4 className="font-bold text-slate-900 text-xs sm:text-sm mt-3.5 leading-snug">
                                    Hands-on Practical Labs
                                </h4>
                                <p className="text-[11px] sm:text-xs text-slate-500 mt-1.5 leading-relaxed">
                                    Active execution in specialized workshops &
                                    kitchens.
                                </p>
                            </div>

                            {/* Metric 2 */}
                            <div className="bg-[#F8FAFD] border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-2xs hover:shadow-xs transition-shadow">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[3.5px] border-[#0B1C30] flex items-center justify-center font-black text-slate-900 text-base sm:text-xl bg-white shadow-xs">
                                    25%
                                </div>
                                <h4 className="font-bold text-slate-900 text-xs sm:text-sm mt-3.5 leading-snug">
                                    Applied Technical Management
                                </h4>
                                <p className="text-[11px] sm:text-xs text-slate-500 mt-1.5 leading-relaxed">
                                    Code compliance, safety protocols, and cost
                                    estimating.
                                </p>
                            </div>

                            {/* Metric 3 */}
                            <div className="bg-[#F8FAFD] border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-2xs hover:shadow-xs transition-shadow">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[3.5px] border-success flex items-center justify-center font-black text-slate-900 text-base sm:text-xl bg-white shadow-xs">
                                    10%
                                </div>
                                <h4 className="font-bold text-slate-900 text-xs sm:text-sm mt-3.5 leading-snug">
                                    Theory & Fundamentals
                                </h4>
                                <p className="text-[11px] sm:text-xs text-slate-500 mt-1.5 leading-relaxed">
                                    Core scientific principles and schematic
                                    interpretation.
                                </p>
                            </div>
                        </div>

                        {/* Practical Lab Image with Badge */}
                        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-16/10 bg-slate-100">
                            <Image
                                src="/images/chefsinkitchen.png"
                                alt="Commercial culinary laboratory at Gongabu training center"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

                            {/* Overlay Caption Pill */}
                            <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-slate-900/90 backdrop-blur-md text-white border border-white/15 px-3.5 py-2 rounded-xl text-xs flex items-center gap-2 shadow-lg">
                                <Camera
                                    size={14}
                                    className="text-primary shrink-0"
                                />
                                <span className="font-medium truncate">
                                    Commercial culinary laboratory at Gongabu
                                    training center — Batch of 2024
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
