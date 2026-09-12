import Link from "next/link";
import { CONTACT, NAV_LINKS } from "@/lib/constants";
import { courses } from "@/lib/courses";

export default function Footer() {
    return (
        <footer className="bg-dark-navy text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                                ST
                            </div>
                            <div>
                                <h3 className="font-bold text-lg leading-tight">
                                    SWAROJGAR TALIM KENDRA
                                </h3>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-4">
                            Premier government-recognized technical and
                            vocational academy in Kathmandu, Nepal. Empowering
                            youth with international-standard practical skills
                            in Culinary Arts, Barista Craft, Hospitality
                            Management, and Specialized Vocational Trades.
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs">
                            <span className="bg-white/10 px-2.5 py-1 rounded">
                                CTEVT Regd: #78420
                            </span>
                            <span className="bg-white/10 px-2.5 py-1 rounded">
                                Govt. Regd: #12841/078
                            </span>
                            <span className="bg-white/10 px-2.5 py-1 rounded">
                                DOFE Certified #492
                            </span>
                        </div>
                    </div>

                    {/* Vocational Programs */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">
                            Vocational Programs
                        </h4>
                        <ul className="space-y-2.5 text-sm text-white/70">
                            {courses.slice(0, 6).map((course) => (
                                <li key={course.id}>
                                    <Link
                                        href="/courses"
                                        className="hover:text-primary transition-colors"
                                    >
                                        {course.category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Academy & Campus */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">
                            Academy & Campus
                        </h4>
                        <ul className="space-y-2.5 text-sm text-white/70">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/courses"
                                    className="hover:text-primary transition-colors"
                                >
                                    Courses & Modules
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-primary transition-colors"
                                >
                                    Admissions & Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kathmandu Campus */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">
                            Kathmandu Campus
                        </h4>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li>
                                <p className="text-white/50 text-xs mb-1">
                                    Main Training Complex
                                </p>
                                <p>
                                    Gongabu Chowk, Ring Road
                                    <br />
                                    Kathmandu, Bagmati Province, Nepal
                                </p>
                            </li>
                            <li>
                                <p className="text-white/50 text-xs mb-1">
                                    General Inquiries
                                </p>
                                <p>{CONTACT.email}</p>
                            </li>
                            <li>
                                <p className="text-white/50 text-xs mb-1">
                                    Direct Lines
                                </p>
                                <p>{CONTACT.hotline}</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
                    <p>
                        © {new Date().getFullYear()} Swarojgar Talim Kendra
                        Nepal Pvt. Ltd. All Rights Reserved. Recognized by the
                        Government of Nepal.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="/terms"
                            className="hover:text-white transition-colors"
                        >
                            Terms of Admission
                        </Link>
                        <Link
                            href="/privacy"
                            className="hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/accreditation"
                            className="hover:text-white transition-colors"
                        >
                            Accreditation
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
