import { courses, Course } from "@/lib/courses";

export const slugify = (str: string): string =>
    str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^\-+|\-+$/g, "");

export const getCourseBySlug = (slug: string): Course | undefined => {
    return courses.find((c) => c.slug === slug || slugify(c.title) === slug);
};
