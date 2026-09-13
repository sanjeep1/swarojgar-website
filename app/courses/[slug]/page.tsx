export default async function CourseDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-slate-900">
                Course: {slug}
            </h1>
        </div>
    );
}
