import { labs } from "@/lib/labs";
import { ShieldCheck } from "lucide-react";

export default function TrainingLabs() {
    return (
        <section className="py-16 lg:py-24 bg-off-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
                        Uncompromising Standard
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5">
                        World-Class Practical Training Labs
                    </h2>
                    <p className="text-body text-lg leading-relaxed">
                        We reject simulated chalkboards. You train directly on
                        the exact commercial machinery and architectural setups
                        you encounter in high-paying jobs.
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
                        <ShieldCheck size={16} />1 Trainee : 1 Station —
                        Guaranteed machine runtime daily
                    </div>
                </div>

                {/* Labs Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {labs.map((lab) => (
                        <div
                            key={lab.id}
                            className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-[4/3] bg-blue-light relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-muted text-sm">
                                    {lab.title} Image
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                                    {lab.title}
                                </p>
                                <h3 className="font-bold text-foreground text-lg mb-2">
                                    {lab.subtitle}
                                </h3>
                                <p className="text-sm text-body leading-relaxed">
                                    {lab.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
