"use client";

import { ChevronDown, PhoneCall } from "lucide-react";
import { useState } from "react";
import { CONTACT } from "@/lib/constants";

const faqs = [
    {
        question:
            "What are the minimum educational requirements to apply for admission?",
        answer: "There is no high percentage requirement. Candidates who have passed at least Class 8 or Class 10 (SEE) are eligible for all introductory vocational tracks. Our modular curriculum starts with basic fundamentals, so no previous hospitality or trade experience is necessary.",
    },
    {
        question:
            "How does CTEVT certification work upon course completion?",
        answer: "Upon completing practical training hours, trainees are registered for the official National Skill Testing Board (NSTB) evaluation conducted under CTEVT. Candidates who demonstrate practical competency receive a government-endorsed CTEVT Skill Certificate, which is internationally recognized for overseas employment visas.",
    },
    {
        question:
            "Are raw ingredients and kitchen tools included in the program fee?",
        answer: "Yes, 100% of all practical materials—including fresh meats, vegetables, dairy, baking ingredients, coffee beans, syrups, professional chef uniforms, and knives—are fully covered in the course tuition. There are zero surprise ingredient charges.",
    },
    {
        question:
            "Can working professionals switch between Morning and Evening shifts?",
        answer: "Yes, we provide flexible shift choices (Morning, Afternoon, and Evening). If your workplace schedule changes, our academic administration allows you to switch your batch timing upon request without repeating modules or losing practical hours.",
    },
];

export default function CoursesFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
                    {/* Left Column */}
                    <div className="lg:col-span-5 space-y-4">
                        <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase block">
                            FREQUENTLY ASKED QUESTIONS
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 leading-snug">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                            Everything you need to know about our courses,
                            certifications, admissions, and career support.
                        </p>

                        {/* Counselor Callout Card */}
                        <div className="bg-[#F0F5FF] border border-blue-100 rounded-2xl p-6 shadow-sm">
                            <h4 className="font-bold text-slate-900 text-base mb-1">
                                Need batch schedule advice?
                            </h4>
                            <p className="text-slate-600 text-xs sm:text-sm mb-4">
                                Speak with our career counselor for personalized
                                guidance:
                            </p>
                            <a
                                href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
                                className="inline-flex items-center gap-2 text-primary font-extrabold text-base sm:text-lg hover:underline"
                            >
                                <PhoneCall size={18} />
                                <span>{CONTACT.phone} / 01-4587023</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="lg:col-span-7 space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={faq.question}
                                    className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenIndex(isOpen ? null : index)
                                        }
                                        className="w-full flex items-center justify-between gap-4 p-5 text-left group bg-white hover:bg-slate-50 transition-colors"
                                    >
                                        <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-primary transition-colors">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            size={18}
                                            className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                                                isOpen ? "rotate-180 text-primary" : ""
                                            }`}
                                        />
                                    </button>

                                    {isOpen && (
                                        <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-white">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
