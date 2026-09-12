import { testimonials } from "@/lib/testimonials";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
                        Student Stories & Entrepreneurship
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Empowered Through Practical Skills
                    </h2>
                    <p className="text-body text-lg">
                        Hear from trainees who mastered hands-on crafts, started
                        their own ventures, and gained professional
                        independence.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="bg-off-white rounded-2xl p-6 lg:p-7 border border-border relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-primary/15">
                                <Quote size={36} />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-5">
                                {[1, 2, 3, 4, 5].map((rating_star) => (
                                    <Star
                                        key={`star-${rating_star}`}
                                        size={16}
                                        className="text-primary fill-primary"
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-body leading-relaxed mb-6 relative z-10">
                                “{item.quote}”
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-4 border-t border-border">
                                {/* Avatar Placeholder */}
                                <div className="w-12 h-12 rounded-full bg-blue-medium flex items-center justify-center text-sm font-bold text-primary">
                                    {item.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </div>

                                <div>
                                    <h4 className="font-semibold text-foreground">
                                        {item.name}
                                    </h4>
                                    <p className="text-sm text-primary font-medium">
                                        {item.role}
                                    </p>
                                    <p className="text-xs text-muted mt-0.5">
                                        {item.batch}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
