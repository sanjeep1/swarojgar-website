import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseContentLayout from "@/components/courses/CourseContentLayout";
import CourseHeroDetail from "@/components/courses/CourseHeroDetail";
import CoursesCtaBar from "@/components/courses/CoursesCtaBar";
import ThreePillarGuarantee from "@/components/courses/ThreePillarGuarantee";
import { courses, getCourseBySlug } from "@/lib/courses";

export async function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
        return {
            title: "Course Not Found | Swarojgar Talim Kendra",
        };
    }

    return {
        title: `${course.title} | CTEVT Vocational Program - Swarojgar Talim Kendra`,
        description: course.description,
        openGraph: {
            title: `${course.title} | Swarojgar Talim Kendra`,
            description: course.description,
            images: [course.image || "/images/chefsinkitchen.png"],
        },
    };
}

export default async function CourseDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <CourseHeroDetail course={course} />
            <CourseContentLayout course={course} />
            <ThreePillarGuarantee />
            <CoursesCtaBar />
        </div>
    );
}
