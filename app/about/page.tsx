import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Accreditations from "@/components/about/Accreditations";
import CampusVisitCta from "@/components/about/CampusVisitCta";
import CorePhilosophy from "@/components/about/CorePhilosophy";
import FacultyMentors from "@/components/about/FacultyMentors";
import FourPillars from "@/components/about/FourPillars";
import MilestonesTimeline from "@/components/about/MilestonesTimeline";

export const metadata: Metadata = {
    title: "About Us | Swarojgar Talim Kendra - Vocational Training Center Kathmandu",
    description:
        "Empowering Nepali youth through practical self-reliance. Learn about our 100% hands-on training philosophy, CTEVT accreditations, commercial lab facilities, and veteran faculty in Gongabu, Kathmandu.",
    openGraph: {
        title: "About Swarojgar Talim Kendra | Practical Vocational Training",
        description:
            "Empowering Nepali youth through practical self-reliance. 12+ years of vocational leadership, CTEVT national accreditation, and veteran practitioners.",
        images: ["/images/chefsinkitchen.png"],
    },
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <AboutHero />
            <CorePhilosophy />
            <MilestonesTimeline />
            <FourPillars />
            <FacultyMentors />
            <Accreditations />
            <CampusVisitCta />
        </div>
    );
}
