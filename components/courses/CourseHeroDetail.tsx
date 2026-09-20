import {
    ArrowRight,
    Award,
    CheckCircle2,
    Clock,
    Download,
    Flame,
    Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/courses";

interface CourseHeroDetailProps {
    course: Course;
}

export default function CourseHeroDetail({ course }: CourseHeroDetailProps) {
    return (
        <section className="relative bg-[#0B1C30] text-white overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20">
            {/* Ambient background glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-6">
                    <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
                        <li>
                            <Link
                                href="/"
                                className="hover:text-white transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link
                                href="/courses"
                                className="hover:text-white transition-colors"
                            >
                                Courses
                            </Link>
                        </li>
                        <li>/</li>
                        <li className="text-emerald-400 font-semibold truncate max-w-xs sm:max-w-md">
                            {course.title}
                        </li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    {/* Left Details */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="flex flex-wrap items-center gap-2.5">
                            <span className="bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                {course.category}
                            </span>
                            <span className="bg-white/10 border border-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                                <Award size={13} className="text-emerald-400" />
                                {course.level}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                            {course.title}
                        </h1>

                        <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                            {course.description}
                        </p>

                        {/* Quick Specs Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
                                <Clock
                                    size={18}
                                    className="text-primary shrink-0"
                                />
                                <div>
                                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                                        Duration
                                    </span>
                                    <span className="text-xs sm:text-sm font-bold text-white">
                                        {course.duration}
                                    </span>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
                                <Flame
                                    size={18}
                                    className="text-orange-400 shrink-0"
                                />
                                <div>
                                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                                        Training Ratio
                                    </span>
                                    <span className="text-xs sm:text-sm font-bold text-white">
                                        {course.practicalRatio}% Practical
                                    </span>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
                                <Users
                                    size={18}
                                    className="text-emerald-400 shrink-0"
                                />
                                <div>
                                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                                        Batch Size
                                    </span>
                                    <span className="text-xs sm:text-sm font-bold text-white">
                                        Max 16 Trainees
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Link
                                href={`/contact?course=${course.slug}`}
                                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow-xl shadow-orange-950/30 transition-colors"
                            >
                                <span>Enroll in This Batch</span>
                                <ArrowRight size={16} />
                            </Link>

                            <a
                                href="#curriculum"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-5 py-3.5 rounded-xl text-sm border border-white/20 transition-colors"
                            >
                                <Download
                                    size={16}
                                    className="text-slate-300"
                                />
                                <span>View Syllabus</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Featured Image */}
                    <div className="lg:col-span-5">
                        <div className="relative aspect-4/3 rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl bg-slate-900 group">
                            <Image
                                src={
                                    course.image || "/images/chefsinkitchen.png"
                                }
                                alt={course.title}
                                fill
                                priority
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                <span className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/20">
                                    <CheckCircle2
                                        size={14}
                                        className="text-emerald-400"
                                    />
                                    1:1 Workstation Guaranteed
                                </span>
                                <span className="bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-md">
                                    CTEVT Affiliated
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
