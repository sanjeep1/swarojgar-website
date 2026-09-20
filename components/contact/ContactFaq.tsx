"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "Can I visit the training campus before enrolling?",
        answer: "Yes, absolutely! We actively encourage prospective students and parents to visit our Gongabu campus. You can walk through our active commercial kitchens, barista bays, and hotel suites, and observe an ongoing practical class before making any commitment.",
    },
    {
        question: "What documents should I bring when visiting the admissions desk?",
        answer: "Please bring a copy of your Citizenship Certificate or Passport, two passport-size photographs, and a copy of your highest academic marksheet (Class 8, SEE / Class 10, or +2). Our counselors will assist you in filling out the registration forms.",
    },
    {
        question: "Is hostel or lodging assistance available for students outside Kathmandu Valley?",
        answer: "Yes, our admissions office partners with vetted, secure private hostels located within 3 to 7 minutes walking distance of our Gongabu campus. We can arrange hostel accommodations with hygienic meals for trainees travelling from outside Kathmandu.",
    },
    {
        question: "How early should I register to guarantee a practical workstation?",
        answer: "Because our 1:1 workstation guarantee limits batch capacity strictly to 16 trainees, seats in popular morning shifts (7:00 AM - 10:00 AM) often fill up 7–10 days before the 1st of each month. We recommend registering early.",
    },
    {
        question: "Can I pay course tuition fees in installments?",
        answer: "Yes, we support a convenient two-installment payment structure: 50% upon initial admission registration, and the remaining 50% midway through your practical training curriculum.",
    },
];

export default function ContactFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 lg:py-20 bg-[#F8FAFC]">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase mb-2 block">
                        ADMISSIONS ASSISTANCE
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                        Common Admissions & Campus Questions
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Find quick answers to the most common queries regarding
                        in-person visits, hostel options, and enrollment procedures.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={faq.question}
                                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs transition-colors"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="w-full flex items-center justify-between gap-4 p-5 text-left group hover:bg-slate-50 transition-colors"
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
                                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

