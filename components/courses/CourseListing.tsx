"use client";

import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import ProgramCard from "@/components/cards/ProgramCard";
import { courses } from "@/lib/courses";

const categoryTabs = [
    { label: "All (6 Courses)", value: "all" },
    { label: "Culinary Arts (2)", value: "Culinary Arts" },
    { label: "Bakery & Pastry (1)", value: "Baking Sciences" },
    { label: "Barista & Coffee (1)", value: "Specialty Beverage" },
    { label: "Hospitality & Front Desk (1)", value: "Hotel Operations" },
    { label: "Caregiving Services (1)", value: "Healthcare Services" },
];

export default function CourseListing() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategoryDropdown, setSelectedCategoryDropdown] = useState("all");
    const [selectedDurationDropdown, setSelectedDurationDropdown] = useState("all");

    const filteredCourses = courses.filter((course) => {
        // Tab category filter
        const matchesTab =
            activeCategory === "all" || course.category === activeCategory;

        // Dropdown category filter
        const matchesCategoryDropdown =
            selectedCategoryDropdown === "all" ||
            course.category === selectedCategoryDropdown;

        // Duration filter
        const matchesDuration =
            selectedDurationDropdown === "all" ||
            (selectedDurationDropdown === "30" && course.duration.includes("30")) ||
            (selectedDurationDropdown === "45" && course.duration.includes("45")) ||
            (selectedDurationDropdown === "90" && (course.duration.includes("90") || course.duration.includes("3 Months")));

        // Search filter
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
            searchTerm === "" ||
            course.title.toLowerCase().includes(searchLower) ||
            course.category.toLowerCase().includes(searchLower) ||
            course.description.toLowerCase().includes(searchLower) ||
            course.tags.some((tag) => tag.toLowerCase().includes(searchLower)) ||
            course.highlights.some((h) => h.toLowerCase().includes(searchLower));

        return matchesTab && matchesCategoryDropdown && matchesDuration && matchesSearch;
    });

    return (
        <section className="py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Search & Filter Toolbar Card */}
                <div className="-mt-20 sm:-mt-24 mb-10 relative z-20">
                    <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                            {/* Search Input */}
                            <div className="md:col-span-6 relative">
                                <Search
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                />
                                <input
                                    type="text"
                                    placeholder="Search by keyword, culinary, front desk, barista, or caregiver..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                />
                            </div>

                            {/* Category Dropdown */}
                            <div className="md:col-span-3 relative">
                                <select
                                    value={selectedCategoryDropdown}
                                    onChange={(e) => {
                                        setSelectedCategoryDropdown(e.target.value);
                                        if (e.target.value !== "all") {
                                            setActiveCategory(e.target.value);
                                        }
                                    }}
                                    className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
                                >
                                    <option value="all">All Categories</option>
                                    <option value="Culinary Arts">Culinary Arts</option>
                                    <option value="Baking Sciences">Bakery & Pastry</option>
                                    <option value="Specialty Beverage">Barista & Coffee</option>
                                    <option value="Hotel Operations">Hospitality & Front Desk</option>
                                    <option value="Beverage Craft">Bartending & Mixology</option>
                                    <option value="Healthcare Services">Caregiving Services</option>
                                </select>
                                <ChevronDown
                                    size={16}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                                />
                            </div>

                            {/* Duration / Shifts Dropdown */}
                            <div className="md:col-span-3 relative">
                                <select
                                    value={selectedDurationDropdown}
                                    onChange={(e) => setSelectedDurationDropdown(e.target.value)}
                                    className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
                                >
                                    <option value="all">All Durations / Shifts</option>
                                    <option value="30">30 Days Intensive</option>
                                    <option value="45">45 Days Track</option>
                                    <option value="90">90 Days / 3 Months</option>
                                </select>
                                <ChevronDown
                                    size={16}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                                />
                            </div>
                        </div>

                        {/* Category Pills */}
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                            {categoryTabs.map((tab) => (
                                <button
                                    type="button"
                                    key={tab.value}
                                    onClick={() => {
                                        setActiveCategory(tab.value);
                                        setSelectedCategoryDropdown(tab.value);
                                    }}
                                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                                        activeCategory === tab.value
                                            ? "bg-[#0B1C30] text-white shadow-md"
                                            : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                            Available Technical Programs
                        </h2>
                        <span className="inline-flex items-center gap-1.5 bg-[#E8F8F0] text-emerald-800 border border-emerald-200 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            CTEVT SKILL TESTING
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        <span>
                            Admitting Now: Next regular batch begins on the 1st of each month
                        </span>
                    </div>
                </div>

                {/* Course Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredCourses.map((course) => (
                        <ProgramCard key={course.id} {...course} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredCourses.length === 0 && (
                    <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
                        <p className="text-lg font-bold text-slate-700 mb-1">
                            No programs found
                        </p>
                        <p className="text-sm text-slate-500 mb-4">
                            Try adjusting your search keywords or filter options.
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                setSearchTerm("");
                                setActiveCategory("all");
                                setSelectedCategoryDropdown("all");
                                setSelectedDurationDropdown("all");
                            }}
                            className="text-xs font-bold text-primary hover:underline uppercase tracking-wider"
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
