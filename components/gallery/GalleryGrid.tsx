"use client";

import { Eye, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface GalleryItem {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    aspect?: string;
}

const galleryItems: GalleryItem[] = [
    {
        id: 1,
        title: "Commercial Demonstration Kitchen",
        category: "Commercial Kitchens",
        description:
            "Individual wok burners, combi-steamers, blast chillers, and stainless-steel prep stations.",
        image: "/images/chefsinkitchen.png",
    },
    {
        id: 2,
        title: "Italian Dual-Boiler Espresso Bays",
        category: "Espresso & Barista",
        description:
            "Multi-station espresso bays, precision grinders, sensory cupping table, and latte art station.",
        image: "/images/chefsinkitchen.png",
    },
    {
        id: 3,
        title: "Model 5-Star Hotel Suite",
        category: "Housekeeping Suite",
        description:
            "Full-scale luxury hotel room to train bed-making speed, sanitization checks, and room auditing.",
        image: "/images/chefsinkitchen.png",
    },
    {
        id: 4,
        title: "Beverage Mixology & Flair Bar",
        category: "Bartending Bar",
        description:
            "Fully stocked cocktail and mocktail practice station with speed rails and working flair acrobatics.",
        image: "/images/chefsinkitchen.png",
    },
    {
        id: 5,
        title: "Student Practical Plating & Assessment",
        category: "Student Practicals",
        description:
            "Trainees presenting multi-course continental dishes during weekly internal evaluation.",
        image: "/images/chefsinkitchen.png",
    },
    {
        id: 6,
        title: "Artisan Bakery Deck Oven Operations",
        category: "Commercial Kitchens",
        description:
            "Commercial deck ovens with steam injection for artisan sourdoughs, baguettes, and viennoiserie.",
        image: "/images/chefsinkitchen.png",
    },
    {
        id: 7,
        title: "Sensory Coffee Cupping & Dial-in",
        category: "Espresso & Barista",
        description:
            "Bean origin analysis, aroma wheel tasting notes, and extraction yield calculations.",
        image: "/images/chefsinkitchen.png",
    },
    {
        id: 8,
        title: "CTEVT Skill Testing Exam Simulation",
        category: "Student Practicals",
        description:
            "Trainees performing standardized trade tasks under certified national assessor supervision.",
        image: "/images/chefsinkitchen.png",
    },
    {
        id: 9,
        title: "Caregiver Patient Mobility & CPR Lab",
        category: "Student Practicals",
        description:
            "Geriatric ergonomic transfer equipment, vital sign monitors, and emergency BLS CPR dummies.",
        image: "/images/chefsinkitchen.png",
    },
];

const categories = [
    { label: "All Facilities", value: "all" },
    { label: "Commercial Kitchens", value: "Commercial Kitchens" },
    { label: "Espresso & Barista", value: "Espresso & Barista" },
    { label: "Housekeeping Suite", value: "Housekeeping Suite" },
    { label: "Bartending Bar", value: "Bartending Bar" },
    { label: "Student Practicals", value: "Student Practicals" },
];

export default function GalleryGrid() {
    const [activeTab, setActiveTab] = useState("all");
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(
        null,
    );

    const filteredItems = galleryItems.filter(
        (item) => activeTab === "all" || item.category === activeTab,
    );

    useEffect(() => {
        if (!selectedImage) {
            return;
        }
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedImage(null);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedImage]);

    return (
        <section className="py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Filter Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                    {categories.map((cat) => (
                        <button
                            type="button"
                            key={cat.value}
                            onClick={() => setActiveTab(cat.value)}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                                activeTab === cat.value
                                    ? "bg-[#0B1C30] text-white shadow-md"
                                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Gallery Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredItems.map((item) => (
                        <button
                            type="button"
                            key={item.id}
                            onClick={() => setSelectedImage(item)}
                            className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-left w-full"
                        >
                            {/* Photo */}
                            <div className="relative aspect-16/10 bg-slate-900 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="inline-flex items-center gap-1.5 text-xs text-white font-medium bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
                                        <Eye size={14} /> Click to Enlarge
                                    </span>
                                </div>

                                <div className="absolute top-3 left-3">
                                    <span className="bg-[#0B1C30]/85 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            {/* Caption */}
                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 mb-1.5 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
                        <button
                            type="button"
                            aria-label="Close image preview"
                            onClick={() => setSelectedImage(null)}
                            className="absolute inset-0 h-full w-full cursor-zoom-out"
                        />
                        <div
                            role="dialog"
                            aria-modal="true"
                            aria-label={selectedImage.title}
                            className="bg-slate-900 border border-white/20 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
                        >
                            <button
                                type="button"
                                aria-label="Close dialog"
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-colors"
                            >
                                <X size={18} />
                            </button>

                            <div className="relative aspect-16/10 w-full bg-black">
                                <Image
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                />
                            </div>

                            <div className="p-6 bg-[#0B1C30] text-white">
                                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                                    {selectedImage.category}
                                </span>
                                <h3 className="text-xl font-extrabold text-white mb-2">
                                    {selectedImage.title}
                                </h3>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    {selectedImage.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
