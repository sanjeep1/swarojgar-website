"use client";

import {
    ArrowRight,
    Award,
    Briefcase,
    Calendar,
    Check,
    CheckCircle2,
    ChevronDown,
    Clock,
    DollarSign,
    FileCheck,
    Globe,
    HelpCircle,
    MessageSquare,
    PhoneCall,
    Shield,
    Sparkles,
    UserCheck,
    Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CONTACT } from "@/lib/constants";
import type { Course } from "@/lib/courses";

interface CourseContentLayoutProps {
    course: Course;
}

export default function CourseContentLayout({
    course,
}: CourseContentLayoutProps) {
    const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="py-12 lg:py-16 bg-slate-50/60">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                    {/* LEFT COLUMN: Main Content (8 cols) */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Section 1: Overview */}
                        <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
                            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
                                PROGRAM OVERVIEW
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                                About {course.title}
                            </h2>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                                {course.longDescription}
                            </p>

                            {/* Practical Ratio Visual Callout */}
                            <div className="bg-[#0B1C30] text-white rounded-xl p-5 border border-white/10 space-y-3">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <Sparkles
                                            className="text-primary"
                                            size={18}
                                        />
                                        <span className="text-sm font-bold text-white">
                                            Practical First Methodology
                                        </span>
                                    </div>
                                    <span className="text-xs text-emerald-400 font-semibold">
                                        {course.hours}
                                    </span>
                                </div>

                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-xs text-slate-300">
                                        <span className="text-primary font-bold">
                                            {course.practicalRatio}% Live
                                            Commercial Lab
                                        </span>
                                        <span className="text-slate-400">
                                            {course.theoryRatio}% Theory & Food
                                            Safety
                                        </span>
                                    </div>
                                    <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden flex">
                                        <div
                                            className="bg-primary h-full rounded-full"
                                            style={{
                                                width: `${course.practicalRatio}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Core Competencies */}
                        <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
                            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
                                LEARNING OUTCOMES
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
                                Core Competencies You Will Master
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {course.competencies.map((comp) => (
                                    <div
                                        key={comp.title}
                                        className="bg-slate-50 border border-slate-200/70 rounded-xl p-4 sm:p-5 hover:border-primary/40 transition-colors"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="w-7 h-7 rounded-lg bg-orange-500/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                                <Check size={16} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                                                    {comp.title}
                                                </h4>
                                                <p className="text-xs text-slate-600 leading-relaxed">
                                                    {comp.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 3: Modular Curriculum */}
                        <section
                            id="curriculum"
                            className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm scroll-mt-24"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <div>
                                    <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1 block">
                                        STEP-BY-STEP ROADMAP
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                                        Comprehensive Modular Curriculum
                                    </h2>
                                </div>
                                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-blue-100 self-start sm:self-auto">
                                    {course.modules.length} Detailed Modules
                                </span>
                            </div>

                            <div className="space-y-3">
                                {course.modules.map((module, idx) => {
                                    const isOpen = openModuleIndex === idx;
                                    return (
                                        <div
                                            key={module.title}
                                            className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                                        >
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenModuleIndex(
                                                        isOpen ? null : idx,
                                                    )
                                                }
                                                className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                                                        {idx + 1}
                                                    </span>
                                                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                                                        {module.title}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-3 shrink-0">
                                                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                                                        {module.duration}
                                                    </span>
                                                    <ChevronDown
                                                        size={18}
                                                        className={`text-slate-400 transition-transform duration-200 ${
                                                            isOpen
                                                                ? "rotate-180 text-primary"
                                                                : ""
                                                        }`}
                                                    />
                                                </div>
                                            </button>

                                            {isOpen && (
                                                <div className="px-5 pb-5 pt-2 bg-slate-50/50 border-t border-slate-100">
                                                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                                                        MODULE TOPICS &
                                                        COMPETENCY CRITERIA
                                                    </span>
                                                    <ul className="space-y-2">
                                                        {module.topics.map(
                                                            (topic) => (
                                                                <li
                                                                    key={topic}
                                                                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug"
                                                                >
                                                                    <CheckCircle2
                                                                        size={
                                                                            15
                                                                        }
                                                                        className="text-emerald-500 shrink-0 mt-0.5"
                                                                    />
                                                                    <span>
                                                                        {topic}
                                                                    </span>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* Section 4: 1:1 Lab Stations Guarantee */}
                        <section className="bg-[#0B1C30] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10 space-y-4">
                                <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase block">
                                    TRAINING FACILITY
                                </span>
                                <h3 className="text-2xl font-extrabold text-white">
                                    The 1:1 Workstation Guarantee
                                </h3>
                                <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                                    At Swarojgar Talim Kendra, we believe true
                                    vocational mastery is impossible when
                                    trainees crowd around one demonstration
                                    stove. Each admitted student is assigned
                                    their own dedicated workstation equipped
                                    with industrial appliances, precision tools,
                                    and raw materials.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                                    <div className="bg-white/10 border border-white/10 rounded-xl p-4">
                                        <UserCheck
                                            className="text-primary mb-2"
                                            size={20}
                                        />
                                        <h5 className="font-bold text-sm text-white mb-1">
                                            No Tool Sharing
                                        </h5>
                                        <p className="text-xs text-slate-300">
                                            Full set of personal tools and
                                            ingredients for every single class.
                                        </p>
                                    </div>
                                    <div className="bg-white/10 border border-white/10 rounded-xl p-4">
                                        <Shield
                                            className="text-emerald-400 mb-2"
                                            size={20}
                                        />
                                        <h5 className="font-bold text-sm text-white mb-1">
                                            Heavy Commercial Gear
                                        </h5>
                                        <p className="text-xs text-slate-300">
                                            Same brands and models deployed in
                                            5-star international hotels.
                                        </p>
                                    </div>
                                    <div className="bg-white/10 border border-white/10 rounded-xl p-4">
                                        <Award
                                            className="text-orange-400 mb-2"
                                            size={20}
                                        />
                                        <h5 className="font-bold text-sm text-white mb-1">
                                            CTEVT Skill Mock Tests
                                        </h5>
                                        <p className="text-xs text-slate-300">
                                            Simulated exam settings to guarantee
                                            100% confidence on test day.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Career Outcomes */}
                        <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
                            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
                                EMPLOYMENT OPPORTUNITIES
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
                                Career Pathways & Placement Support
                            </h2>

                            <div className="space-y-6">
                                {/* Roles */}
                                <div>
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                                        TARGET JOB ROLES
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {course.careerOutcomes.roles.map(
                                            (role) => (
                                                <span
                                                    key={role}
                                                    className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg"
                                                >
                                                    <Briefcase
                                                        size={13}
                                                        className="text-primary"
                                                    />
                                                    {role}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {/* Destinations */}
                                <div>
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                                        GLOBAL EMPLOYMENT DESTINATIONS
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {course.careerOutcomes.destinations.map(
                                            (dest) => (
                                                <span
                                                    key={dest}
                                                    className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-lg"
                                                >
                                                    <Globe
                                                        size={13}
                                                        className="text-blue-600"
                                                    />
                                                    {dest}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {/* Salary Range */}
                                <div className="bg-[#FFF8F4] border border-orange-200/70 rounded-xl p-4 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-orange-500/15 text-primary flex items-center justify-center shrink-0">
                                        <DollarSign size={20} />
                                    </div>
                                    <div>
                                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                                            ESTIMATED ENTRY SALARY RANGE
                                        </span>
                                        <span className="text-sm font-extrabold text-slate-900">
                                            {course.careerOutcomes.salary}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: Eligibility & Documents */}
                        <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
                            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
                                ADMISSION CRITERIA
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
                                Eligibility & Required Documents
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                                            <FileCheck size={16} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-900 text-sm">
                                                Education Level
                                            </h5>
                                            <p className="text-xs text-slate-600 mt-0.5">
                                                {course.eligibility.education}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                                            <Users size={16} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-900 text-sm">
                                                Age Criteria
                                            </h5>
                                            <p className="text-xs text-slate-600 mt-0.5">
                                                {course.eligibility.age}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                                        REQUIRED AT REGISTRATION:
                                    </span>
                                    <ul className="space-y-1.5">
                                        {course.eligibility.documents.map(
                                            (doc) => (
                                                <li
                                                    key={doc}
                                                    className="flex items-center gap-2 text-xs text-slate-600"
                                                >
                                                    <Check
                                                        size={14}
                                                        className="text-primary shrink-0"
                                                    />
                                                    <span>{doc}</span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 7: Course FAQs */}
                        {course.faqs.length > 0 && (
                            <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
                                <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
                                    GOT QUESTIONS?
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
                                    Frequently Asked Questions About This Course
                                </h2>

                                <div className="space-y-3">
                                    {course.faqs.map((faq, idx) => {
                                        const isOpen = openFaqIndex === idx;
                                        return (
                                            <div
                                                key={faq.question}
                                                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setOpenFaqIndex(
                                                            isOpen ? null : idx,
                                                        )
                                                    }
                                                    className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                                                >
                                                    <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                                                        {faq.question}
                                                    </span>
                                                    <ChevronDown
                                                        size={18}
                                                        className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                                                            isOpen
                                                                ? "rotate-180 text-primary"
                                                                : ""
                                                        }`}
                                                    />
                                                </button>

                                                {isOpen && (
                                                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed bg-white border-t border-slate-100">
                                                        {faq.answer}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* RIGHT COLUMN: Sticky Sidebar Widget (4 cols) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
                        {/* Course Enrollment Card */}
                        <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                            <div className="space-y-4">
                                {/* Urgency Status */}
                                <div className="bg-[#E8F8F0] border border-emerald-200 text-emerald-800 rounded-xl p-3 flex items-center gap-2.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                                    <div className="text-xs">
                                        <span className="font-bold block">
                                            Admissions Open
                                        </span>
                                        <span className="text-emerald-700">
                                            Next Intake: 1st of Next Month
                                        </span>
                                    </div>
                                </div>

                                <div className="border-b border-slate-100 pb-4">
                                    <span className="text-xs text-slate-500 font-semibold block uppercase">
                                        Curriculum & Lab Standard
                                    </span>
                                    <h3 className="text-xl font-extrabold text-slate-900">
                                        {course.level}
                                    </h3>
                                </div>

                                {/* Facts Table */}
                                <div className="space-y-3 text-xs sm:text-sm">
                                    <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                                        <span className="text-slate-500 flex items-center gap-2">
                                            <Clock
                                                size={15}
                                                className="text-primary"
                                            />
                                            Duration
                                        </span>
                                        <span className="font-bold text-slate-900">
                                            {course.duration}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                                        <span className="text-slate-500 flex items-center gap-2">
                                            <Award
                                                size={15}
                                                className="text-emerald-600"
                                            />
                                            Total Lab Hours
                                        </span>
                                        <span className="font-bold text-slate-900">
                                            {course.hours}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                                        <span className="text-slate-500 flex items-center gap-2">
                                            <Users
                                                size={15}
                                                className="text-blue-600"
                                            />
                                            Batch Limit
                                        </span>
                                        <span className="font-bold text-slate-900">
                                            Strictly 16 Students Max
                                        </span>
                                    </div>

                                    <div className="flex items-start justify-between py-1.5 border-b border-slate-100">
                                        <span className="text-slate-500 flex items-center gap-2">
                                            <Calendar
                                                size={15}
                                                className="text-orange-500"
                                            />
                                            Shifts
                                        </span>
                                        <span className="font-bold text-slate-900 text-right">
                                            Morning • Day • Evening
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between py-1.5">
                                        <span className="text-slate-500 flex items-center gap-2">
                                            <Shield
                                                size={15}
                                                className="text-purple-600"
                                            />
                                            Uniform & Kit
                                        </span>
                                        <span className="font-bold text-emerald-600">
                                            Included Free
                                        </span>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="space-y-3 pt-2">
                                    <Link
                                        href={`/contact?course=${course.slug}`}
                                        className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-lg shadow-orange-950/20 transition-colors"
                                    >
                                        <span>Apply For This Course</span>
                                        <ArrowRight size={16} />
                                    </Link>

                                    <a
                                        href={`https://wa.me/9779841425656?text=Hello%20I%20am%20interested%20in%20${encodeURIComponent(course.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-6 rounded-xl text-xs sm:text-sm transition-colors border border-slate-200"
                                    >
                                        <MessageSquare
                                            size={15}
                                            className="text-emerald-600"
                                        />
                                        <span>Inquire via WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Counselor Box */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                            <h4 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                                <HelpCircle
                                    size={18}
                                    className="text-primary"
                                />
                                Need Guidance on This Course?
                            </h4>
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                Our vocational admission counselors can help you
                                select the right batch shift and explain
                                overseas visa testing pathways.
                            </p>

                            <div className="pt-2 border-t border-slate-100 space-y-2">
                                <a
                                    href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
                                    className="flex items-center gap-2.5 text-slate-900 font-bold text-sm hover:text-primary transition-colors"
                                >
                                    <PhoneCall
                                        size={16}
                                        className="text-primary"
                                    />
                                    <span>{CONTACT.phone} / 01-4587023</span>
                                </a>
                                <p className="text-[11px] text-slate-400">
                                    Open Sunday – Friday: 7:00 AM – 6:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
