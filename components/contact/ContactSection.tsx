"use client";

import {
    ArrowRight,
    CheckCircle2,
    Clock,
    Mail,
    MapPin,
    MessageSquare,
    PhoneCall,
    Send,
    ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { CONTACT } from "@/lib/constants";
import { courses } from "@/lib/courses";

export default function ContactSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        course: "Commercial & General Cook Training",
        shift: "Morning (7:00 AM - 10:00 AM)",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        await new Promise((resolve) => setTimeout(resolve, 800));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <section className="py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                    {/* LEFT COLUMN: Contact Channels & Campus Details (5 cols) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div>
                            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1 block">
                                DIRECT CHANNELS
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-2">
                                Get in Touch with Our Counseling Team
                            </h2>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Our doors are open 6 days a week for prospective
                                students and parents. Contact us directly or
                                drop by for free live class observation.
                            </p>
                        </div>

                        {/* Card 1: Phone & Hotline */}
                        <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 space-y-4 hover:border-primary/40 transition-colors">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-primary flex items-center justify-center shrink-0">
                                    <PhoneCall size={20} />
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-slate-900 text-base">
                                        Admissions Call Desk
                                    </h3>
                                    <p className="text-xs text-slate-500">
                                        Speak directly with senior counselors
                                    </p>
                                </div>
                            </div>

                            <div className="pt-2 border-t border-slate-200/80 space-y-1">
                                <a
                                    href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
                                    className="text-base sm:text-lg font-extrabold text-slate-900 hover:text-primary transition-colors block"
                                >
                                    {CONTACT.phone}
                                </a>
                                <p className="text-xs text-slate-500">
                                    Hotline: {CONTACT.hotline}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                <a
                                    href={`https://wa.me/9779841425656?text=Hello%20I%20would%20like%20information%20on%20Swarojgar%20courses`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-bold text-xs px-3.5 py-2 rounded-xl transition-colors border border-[#25D366]/30"
                                >
                                    <MessageSquare size={14} />
                                    <span>Chat on WhatsApp</span>
                                </a>
                                <a
                                    href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
                                    className="inline-flex items-center gap-1.5 bg-primary/10 hover:bg-primary/20 text-primary font-bold text-xs px-3.5 py-2 rounded-xl transition-colors border border-primary/20"
                                >
                                    <PhoneCall size={14} />
                                    <span>Call Now</span>
                                </a>
                            </div>
                        </div>

                        {/* Card 2: Campus Address */}
                        <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 space-y-3 hover:border-primary/40 transition-colors">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-slate-900 text-base">
                                        Kathmandu Central Campus
                                    </h3>
                                    <p className="text-xs text-slate-500">
                                        Opposite to Kathmandu New Buspark
                                        Complex
                                    </p>
                                </div>
                            </div>

                            <div className="pt-2 border-t border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
                                <p className="font-semibold text-slate-900">
                                    Swarojgar Talim Kendra Building
                                </p>
                                <p className="text-slate-600 mt-0.5">
                                    {CONTACT.address}
                                </p>
                                <p className="text-[11px] text-slate-500 mt-2">
                                    Landmark: 2 minutes walking distance from BG
                                    Mall, Gongabu Chowk Ring Road.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Email & Working Hours */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5">
                                <Mail size={18} className="text-primary mb-2" />
                                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                                    OFFICIAL EMAIL
                                </span>
                                <a
                                    href={`mailto:${CONTACT.email}`}
                                    className="text-xs font-bold text-slate-900 hover:text-primary transition-colors truncate block mt-0.5"
                                >
                                    {CONTACT.email}
                                </a>
                            </div>

                            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5">
                                <Clock
                                    size={18}
                                    className="text-emerald-500 mb-2"
                                />
                                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                                    CAMPUS TIMING
                                </span>
                                <span className="text-xs font-bold text-slate-900 block mt-0.5">
                                    Sun – Fri: 7 AM – 6 PM
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Admission & Inquiry Form (7 cols) */}
                    <div className="lg:col-span-7">
                        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
                            {/* Decorative banner at top */}
                            <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                                <div>
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                                        ONLINE INQUIRY & PRE-ENROLLMENT
                                    </span>
                                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                        Send an Admission Inquiry
                                    </h3>
                                </div>
                                <span className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full">
                                    <ShieldCheck size={14} /> Intake Open
                                </span>
                            </div>

                            {isSubmitted ? (
                                <div className="py-12 text-center space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                                        <CheckCircle2 size={36} />
                                    </div>
                                    <h4 className="text-xl font-extrabold text-slate-900">
                                        Inquiry Received Successfully!
                                    </h4>
                                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                                        Thank you,{" "}
                                        <span className="font-bold text-slate-900">
                                            {formData.fullName}
                                        </span>
                                        . Our admissions counselor will contact
                                        you shortly via phone/WhatsApp at{" "}
                                        <span className="font-bold text-slate-900">
                                            {formData.phone}
                                        </span>{" "}
                                        with batch timings and course syllabus
                                        details.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsSubmitted(false);
                                            setFormData({
                                                fullName: "",
                                                phone: "",
                                                email: "",
                                                course: "Commercial & General Cook Training",
                                                shift: "Morning (7:00 AM - 10:00 AM)",
                                                message: "",
                                            });
                                        }}
                                        className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider"
                                    >
                                        Send Another Inquiry
                                    </button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4 sm:space-y-5"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* Full Name */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-800 block">
                                                Full Name{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Binod Shrestha"
                                                value={formData.fullName}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        fullName:
                                                            e.target.value,
                                                    })
                                                }
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                            />
                                        </div>

                                        {/* Mobile / WhatsApp Number */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-800 block">
                                                Mobile / WhatsApp No.{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="e.g. 98XXXXXXXX"
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        phone: e.target.value,
                                                    })
                                                }
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-800 block">
                                            Email Address{" "}
                                            <span className="text-slate-400 font-normal">
                                                (Optional)
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="e.g. name@example.com"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    email: e.target.value,
                                                })
                                            }
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* Program of Interest */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-800 block">
                                                Program of Interest{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </label>
                                            <select
                                                value={formData.course}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        course: e.target.value,
                                                    })
                                                }
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors cursor-pointer"
                                            >
                                                {courses.map((course) => (
                                                    <option
                                                        key={course.id}
                                                        value={course.title}
                                                    >
                                                        {course.title}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Preferred Shift */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-800 block">
                                                Preferred Shift
                                            </label>
                                            <select
                                                value={formData.shift}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        shift: e.target.value,
                                                    })
                                                }
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors cursor-pointer"
                                            >
                                                <option value="Morning (7:00 AM - 10:00 AM)">
                                                    Morning (7:00 AM - 10:00 AM)
                                                </option>
                                                <option value="Day (11:00 AM - 2:00 PM)">
                                                    Day (11:00 AM - 2:00 PM)
                                                </option>
                                                <option value="Evening (3:00 PM - 6:00 PM)">
                                                    Evening (3:00 PM - 6:00 PM)
                                                </option>
                                                <option value="Weekend Special">
                                                    Weekend Special
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-800 block">
                                            Message or Specific Questions{" "}
                                            <span className="text-slate-400 font-normal">
                                                (Optional)
                                            </span>
                                        </label>
                                        <textarea
                                            rows={3}
                                            placeholder="Ask anything about fees, hostel accommodation, or visa skills requirements..."
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    message: e.target.value,
                                                })
                                            }
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 disabled:opacity-70 text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-xl shadow-orange-950/20 transition-all duration-200"
                                    >
                                        {isSubmitting ? (
                                            <span>Submitting Inquiry...</span>
                                        ) : (
                                            <>
                                                <span>
                                                    Submit Inquiry & Request
                                                    Callback
                                                </span>
                                                <Send size={15} />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-[11px] text-slate-400">
                                        🔒 100% Privacy Guarantee. Your contact
                                        info is strictly used for course
                                        admissions.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
