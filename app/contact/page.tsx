import type { Metadata } from "next";
import CampusVisitCta from "@/components/about/CampusVisitCta";
import ContactFaq from "@/components/contact/ContactFaq";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import CoursesCtaBar from "@/components/courses/CoursesCtaBar";

export const metadata: Metadata = {
    title: "Contact & Admissions Desk | Swarojgar Talim Kendra - Kathmandu",
    description:
        "Contact Swarojgar Talim Kendra at Gongabu Chowk, Kathmandu. Inquire about course fees, batch shifts, CTEVT skill tests, or schedule a free campus tour.",
    openGraph: {
        title: "Contact Swarojgar Talim Kendra | Admissions Desk",
        description:
            "Speak directly with vocational counselors or visit our Gongabu training campus in Kathmandu.",
        images: ["/images/chefsinkitchen.png"],
    },
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <ContactHero />
            <ContactSection />
            <CampusVisitCta />
            <ContactFaq />
            <CoursesCtaBar />
        </div>
    );
}
