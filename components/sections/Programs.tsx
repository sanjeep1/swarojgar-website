"use client";

import { useState } from "react";
import ProgramCard from "@/components/cards/ProgramCard";
import { courses } from "@/lib/courses";

const filters = [
    { label: "All Courses", value: "all" },
    { label: "Culinary & Cooking", value: "Culinary Arts" },
    { label: "Barista & Beverage", value: "Specialty Beverage" },
    { label: "Hospitality & Care", value: "Hotel Operations" },
];

export default function Programs() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredCourses =
        activeFilter === "all"
            ? courses
            : courses.filter((course) => {
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
              });

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
                        Comprehensive Skill Blueprints
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Signature Vocational Programs
                    </h2>
                    <p className="text-body text-lg">
                        Structured industry training calibrated to international
                        hospitality benchmarks, complete with internship
                        rotations and certification.
                    </p>
                </div>

                {/* Dynamic Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
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
                        No courses found in this category.
                    </div>
                )}
            </div>
        </section>
    );
}
