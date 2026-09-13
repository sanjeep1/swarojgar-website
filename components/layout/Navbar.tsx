"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CONTACT, NAV_LINKS } from "@/lib/constants";
import LogoImage from "@/public/images/logo.webp";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={LogoImage}
                            alt="Swarojgar Talim Kendra Logo"
                            width={40}
                            height={40}
                        />
                        <div className="hidden sm:block">
                            <h1 className="font-bold text-lg leading-tight text-slate-900">
                                SWAROJGAR TALIM KENDRA
                            </h1>
                            <p className="text-xs text-slate-500">
                                Govt. Recognized & CTEVT Affiliated Skill
                                Training Center
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm transition-all ${
                                        isActive
                                            ? "font-bold text-slate-950 bg-slate-100/90 border border-slate-300 px-3.5 py-1.5 rounded-lg shadow-2xs"
                                            : "font-medium text-slate-700 hover:text-primary px-2 py-1"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Side */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-xs font-bold text-body">
                                STUDENT ADVISORY
                            </p>
                            <p className="font-semibold text-sm text-primary-dark flex items-center gap-1">
                                <Phone
                                    size={14}
                                    className="text-primary-dark"
                                />
                                {CONTACT.phone}
                            </p>
                        </div>
                        <Button className="bg-primary py-4 px-3 hover:bg-primary/90 text-white shadow-sm text-xs sm:text-sm font-semibold rounded-xl">
                            Enroll Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="lg:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden py-4 border-t">
                        <nav className="flex flex-col gap-3">
                            {NAV_LINKS.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`text-sm py-1.5 px-2 rounded-md transition-colors ${
                                            isActive
                                                ? "font-bold text-primary bg-primary/10"
                                                : "font-medium text-slate-700 hover:text-primary"
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-4 border-t">
                                <p className="text-sm font-medium mb-2">
                                    Student Advisory
                                </p>
                                <p className="text-orange-600 font-semibold">
                                    {CONTACT.phone}
                                </p>
                                <Button className="w-full mt-3 bg-orange-500 hover:bg-orange-600">
                                    Enroll Now
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
