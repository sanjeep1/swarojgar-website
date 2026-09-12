"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import LogoImage from "@/public/images/logo.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
                Govt. Recognized & CTEVT Affiliated Skill Training Center
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-orange-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs font-bold text-[#44474D]">
                STUDENT ADVISORY
              </p>
              <p className="font-semibold text-sm text-[#A73A00] flex items-center gap-1">
                <Phone size={14} className="text-[#A73A00]" />
                {CONTACT.phone}
              </p>
            </div>
            <Button className="bg-[#FD651E] py-4 px-2 hover:bg-orange-600 text-white shadow-sm text-xs sm:text-sm">
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
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-orange-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <p className="text-sm font-medium mb-2">Student Advisory</p>
                <p className="text-orange-600 font-semibold">{CONTACT.phone}</p>
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
