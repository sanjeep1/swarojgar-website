import { ArrowRight, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProgramCardProps {
    title: string;
    category: string;
    badge: string;
    badgeColor: string;
    duration: string;
    certification: string;
    description: string;
    tags: string[];
    image: string;
}

export default function ProgramCard({
    title,
    category,
    badge,
    badgeColor,
    duration,
    certification,
    description,
    tags,
}: ProgramCardProps) {
    return (
        <div className="group bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Image Placeholder */}
            <div className="relative aspect-16/10 bg-blue-light overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted text-sm">
                    {category} Image
                </div>

                {/* Badge */}
                <div className="absolute top-3 left-3">
                    <span
                        className={`${badgeColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full`}
                    >
                        {badge}
                    </span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full text-foreground">
                    {duration}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
                <div>
                    <p className="text-xs font-medium text-primary mb-1">
                        {category}
                    </p>
                    <h3 className="font-bold text-lg text-foreground leading-snug">
                        {title}
                    </h3>
                </div>

                <div className="flex items-center gap-1.5 text-success text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    {certification}
                </div>

                <p className="text-sm text-body leading-relaxed line-clamp-3">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-blue-light text-foreground/80 text-xs font-normal"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-border text-sm"
                    >
                        <BookOpen className="w-4 h-4 mr-1.5" />
                        Curriculum
                    </Button>
                    <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary-dark text-white text-sm"
                    >
                        Apply Course
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
