import { ArrowRight, Check, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/courses";

export default function ProgramCard(props: Course) {
    const {
        title,
        slug,
        category,
        subCategory,
        duration,
        level,
        practicalRatio = 85,
        theoryRatio = 15,
        description,
        image,
        highlights = [],
    } = props;

    return (
        <div className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
                {/* Image Container */}
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                    <Image
                        src={image || "/images/chefsinkitchen.png"}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Category Badge Top-Left */}
                    <div className="absolute top-3 left-3">
                        <span className="bg-[#0B1C30]/85 backdrop-blur-sm text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-md">
                            {category}
                        </span>
                    </div>

                    {/* Duration Badge Bottom-Right */}
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-full text-slate-800 shadow-sm">
                        {duration}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    {/* Subcategory & Level row */}
                    <div className="flex items-center justify-between text-xs">
                        <span className="bg-blue-50 text-blue-700 font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                            {subCategory || category}
                        </span>
                        <span className="text-slate-500 font-medium">
                            {level || "CTEVT Certified"}
                        </span>
                    </div>

                    {/* Course Title */}
                    <Link href={`/courses/${slug}`} className="block">
                        <h3 className="font-extrabold text-lg text-slate-900 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                            {title}
                        </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                        {description}
                    </p>

                    {/* Practical Ratio Bar */}
                    <div className="space-y-1.5 pt-1">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                            <span className="text-primary">
                                {practicalRatio}% Practical Ratio
                            </span>
                            <span className="text-slate-500">
                                {theoryRatio}% Theory & Hygiene
                            </span>
                        </div>
                        <div className="h-1.5 w-full bg-[#0B1C30] rounded-full overflow-hidden flex">
                            <div
                                className="bg-primary h-full rounded-full"
                                style={{ width: `${practicalRatio}%` }}
                            />
                        </div>
                    </div>

                    {/* Core Syllabus Highlights */}
                    {highlights.length > 0 && (
                        <div className="pt-2 border-t border-slate-100 space-y-2">
                            <span className="text-[11px] font-bold text-slate-800 tracking-wider uppercase block">
                                CORE SYLLABUS HIGHLIGHTS
                            </span>
                            <ul className="space-y-1.5">
                                {highlights.map((highlight) => (
                                    <li
                                        key={highlight}
                                        className="flex items-start gap-2 text-xs text-slate-600 leading-tight"
                                    >
                                        <Check
                                            size={14}
                                            className="text-primary shrink-0 mt-0.5"
                                        />
                                        <span className="line-clamp-1">
                                            {highlight}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-0 grid grid-cols-2 gap-3 mt-4">
                <Link
                    href={`/courses/${slug}`}
                    className="inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-200 transition-colors"
                >
                    <FileText size={14} />
                    <span>View Syllabus</span>
                </Link>

                <Link
                    href={`/contact?course=${slug}`}
                    className="inline-flex items-center justify-center gap-1.5 bg-primary hover:bg-orange-600 text-white font-bold px-3 py-2.5 rounded-xl text-xs sm:text-sm shadow-md shadow-orange-950/20 transition-colors"
                >
                    <span>Enroll In Batch</span>
                    <ArrowRight size={14} />
                </Link>
            </div>
        </div>
    );
}
