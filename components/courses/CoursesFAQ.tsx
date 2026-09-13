"use client";

import { ChevronDown, Phone, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { CONTACT } from "@/lib/constants";

const faqs = [
    {
        question:
            "What is the minimum class 10 pass percentage to be eligible for admission?",
        answer: "There is no minimum percentage requirement. Students who have completed at least Class 8 or SEE (Class 10) are eligible for basic courses. All modules begin from fundamentals, so no prior hospitality or technical background is needed.",
    },
    {
        question: "How does CTEVT practical training & course assessment work?",
        answer: "CTEVT assessments combine internal practical evaluations conducted by our instructors with an official national skill test organized by CTEVT. Students must demonstrate hands-on competency in real work scenarios to receive their government-recognized credentials.",
    },
    {
        question:
            "Are weekend or night shift courses available for working students?",
        answer: "Yes, we offer flexible scheduling options including weekend batches and evening sessions for working professionals. Contact our admissions office for the current schedule of available time slots.",
    },
    {
        question:
            "Are training certificates and trade certificates the same program?",
        answer: "No. Training certificates are issued upon course completion by the institution. Trade certificates (skill test certificates) are issued by CTEVT after passing the national skill test—a government-recognized credential valid for overseas employment.",
    },
    {
        question:
            "Can working professionals also benefit from evening and training programs?",
        answer: "Absolutely. Many of our programs are designed with working professionals in mind, featuring condensed evening modules and weekend practical sessions that allow you to upskill without leaving your current employment.",
    },
];

export default function CoursesFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 leading-snug mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                            Get quick answers about admissions, course
                            structure, certifications, and career support at
                            Swarojgar Talim Kendra.
                        </p>

                        {/* Contact CTA */}
                        <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-5 sm:p-6">
                            <p className="font-semibold text-slate-900 text-sm sm:text-base mb-3">
                                Need to chat before you decide?
                            </p>
                            <a
                                href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
                                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline mb-4"
                            >
                                <Phone size={15} />
                                <span>{CONTACT.phone}</span>
                            </a>

                            <div className="flex items-center gap-2 mt-2">
                                <ShieldCheck
                                    size={15}
                                    className="text-emerald-500 shrink-0"
                                />
                                <span className="text-xs text-slate-500 font-medium">
                                    CTEVT Certified Training Center
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - FAQ Items */}
                    <div className="space-y-0">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={faq.question}
                                    className="border-b border-slate-200"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenIndex(isOpen ? null : index)
                                        }
                                        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                                    >
                                        <span className="font-semibold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-primary transition-colors">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            size={18}
                                            className={`text-slate-400 shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                        />
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 pb-5" : "max-h-0"}`}
                                    >
                                        <p className="text-slate-600 text-sm leading-relaxed pr-8">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
