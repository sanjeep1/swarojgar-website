import type { Metadata } from "next";
import CourseListing from "@/components/courses/CourseListing";
import CoursesCtaBar from "@/components/courses/CoursesCtaBar";
import CoursesFAQ from "@/components/courses/CoursesFAQ";
import CoursesHero from "@/components/courses/CoursesHero";
import ThreePillarGuarantee from "@/components/courses/ThreePillarGuarantee";

export const metadata: Metadata = {
    title: "Vocational Courses | Swarojgar Talim Kendra - CTEVT Affiliated Programs",
    description:
        "Explore our industry-calibrated vocational training programs. CTEVT certified courses in Culinary Arts, Barista Craft, Hospitality, Bartending, and Healthcare. Practical training in Kathmandu.",
    openGraph: {
        title: "Vocational Courses | Swarojgar Talim Kendra",
        description:
            "Industry-calibrated CTEVT vocational programs. 85% employment rate, 1:1 instructor ratio, 6 career pathways.",
        images: ["/images/chefsinkitchen.png"],
    },
};

export default function CoursesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <CoursesHero />
            <CourseListing />
            <ThreePillarGuarantee />
            <CoursesFAQ />
            <CoursesCtaBar />
        </div>
    );
}
