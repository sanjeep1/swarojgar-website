import type { Metadata } from "next";
import CampusVisitCta from "@/components/about/CampusVisitCta";
import CoursesCtaBar from "@/components/courses/CoursesCtaBar";
import FacilityFeatures from "@/components/gallery/FacilityFeatures";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryHero from "@/components/gallery/GalleryHero";

export const metadata: Metadata = {
    title: "Campus Gallery & Labs | Swarojgar Talim Kendra - Kathmandu",
    description:
        "Explore photos of our commercial kitchens, espresso coffee stations, 5-star housekeeping hotel suites, and student practical workshops in Gongabu, Kathmandu.",
    openGraph: {
        title: "Campus Gallery & Training Labs | Swarojgar Talim Kendra",
        description:
            "Take a visual walkthrough of our real-world training labs and student practical sessions in Kathmandu.",
        images: ["/images/chefsinkitchen.png"],
    },
};

export default function GalleryPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <GalleryHero />
            <GalleryGrid />
            <FacilityFeatures />
            <CampusVisitCta />
            <CoursesCtaBar />
        </div>
    );
}
