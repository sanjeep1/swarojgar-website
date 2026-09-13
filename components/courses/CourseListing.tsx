"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import ProgramCard from "@/components/cards/ProgramCard";
import { courses } from "@/lib/courses";

const filters = [
    { label: "All Programs", value: "all" },
    { label: "Culinary & Cooking", value: "Culinary Arts" },
    { label: "Hospitality", value: "Hotel Operations" },
    { label: "Barista & Beverages", value: "Specialty Beverage" },
];

export default function CourseListing() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCourses = courses.filter((course) => {
        // Category filter
        const matchesCategory =
            activeFilter === "all" ||
            (() => {
                if (activeFilter === "Culinary Arts") {
                    return (
                        course.category === "Culinary Arts" ||
                        course.category === "Baking Sciences"
                    );
                }
                if (activeFilter === "Specialty Beverage") {
                    return (
                        course.category === "Specialty Beverage" ||
                        course.category === "Beverage Craft"
                    );
                }
                if (activeFilter === "Hotel Operations") {
                    return (
                        course.category === "Hotel Operations" ||
                        course.category === "Healthcare Services"
                    );
                }
                return course.category === activeFilter;
            })();

        // Search filter
        const matchesSearch =
            searchTerm === "" ||
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.category
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            course.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            course.tags.some((tag) =>
                tag.toLowerCase().includes(searchTerm.toLowerCase())
            );

        return matchesCategory && matchesSearch;
    });

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                                Available Technical Programs
                            </h2>
                            <span className="hidden sm:inline-flex items-center gap-1.5 bg-[#002517] text-success-light border border-[#004A2F] text-[11px] font-semibold px-3 py-1 rounded-full">
                                CTEVT SKILL TESTING
                            </span>
                        </div>
                        <p className="text-slate-500 text-sm sm:text-base">
                            Browse our complete catalog of industry-aligned
                            vocational training programs.
                        </p>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative mb-6">
                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                        type="text"
                        placeholder="Search by program title, skill domain, or career pathway..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white border border-border rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {filters.map((filter) => (
                        <button
                            type="button"
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                                activeFilter === filter.value
                                    ? "bg-primary text-white shadow-md"
                                    : "bg-blue-light text-foreground hover:bg-blue-medium"
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Course Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredCourses.map((course) => (
                        <ProgramCard key={course.id} {...course} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredCourses.length === 0 && (
                    <div className="text-center py-16 text-muted">
                        <p className="text-lg font-semibold text-slate-600 mb-2">
                            No programs found
                        </p>
                        <p className="text-sm text-slate-400">
                            Try adjusting your search or filter criteria.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
