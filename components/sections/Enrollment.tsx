"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { admissionSchema, type AdmissionFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/lib/courses";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const faqs = [
    {
        question: "What are the entry qualification requirements?",
        answer: "Minimum 8th pass or SEE (Class 10) for basic courses. No prior hospitality background is required; all modules begin from fundamentals.",
    },
    {
        question: "Can I pay tuition in installments?",
        answer: "Yes, fees can be paid in two equal installments (50% on admission, 50% midway through the practical curriculum).",
    },
    {
        question: "Is CTEVT certificate provided after completion?",
        answer: "Yes, upon completing internal evaluations, trainees participate in the national skill test organized by CTEVT to receive official government credentials.",
    },
];

export default function Enrollment() {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<AdmissionFormValues>({
        resolver: zodResolver(admissionSchema),
        defaultValues: {
            careerGoal: undefined,
        },
    });

    const onSubmit = async (data: AdmissionFormValues) => {
        console.log("Form submitted:", data);
        // Later we will connect this to an API route
        alert("Application submitted successfully! We will contact you soon.");
    };

    return (
        <section className="py-16 lg:py-24 bg-off-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Side - Info + FAQ */}
                    <div>
                        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
                            Fast-Track Enrollment
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Reserve Your Seat for Next Cohort
                        </h2>
                        <p className="text-body text-lg mb-8">
                            Class sizes are capped at 16 candidates per kitchen
                            lab to guarantee individual mentorship. Seats fill
                            10–15 days in advance.
                        </p>

                        <div className="space-y-5">
                            {faqs.map((faq, index) => (
                                <div
                                    key={faq.question}
                                    className="bg-white rounded-xl p-5 border border-border"
                                >
                                    <h4 className="font-semibold text-foreground mb-2 flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                                        {faq.question}
                                    </h4>
                                    <p className="text-sm text-body leading-relaxed pl-7">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white rounded-2xl border border-border shadow-lg p-6 lg:p-8">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-foreground">
                                    Application for Admission
                                </h3>
                                <p className="text-sm text-muted mt-1">
                                    Intake 2025 • Gongabu Training Campus
                                </p>
                            </div>
                            <Badge className="bg-success/10 text-success border-success/20">
                                Active Intake
                            </Badge>
                        </div>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-5"
                        >
                            {/* Full Name */}
                            <div className="space-y-2">
                                <Label htmlFor="fullName">
                                    Candidate Full Name{" "}
                                    <span className="text-primary">*</span>
                                </Label>
                                <Input
                                    id="fullName"
                                    placeholder="e.g. Aarav Sharma"
                                    {...register("fullName")}
                                />
                                {errors.fullName && (
                                    <p className="text-sm text-red-500">
                                        {errors.fullName.message}
                                    </p>
                                )}
                            </div>

                            {/* Phone + Email */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="phone">
                                        Phone / WhatsApp Number{" "}
                                        <span className="text-primary">*</span>
                                    </Label>
                                    <Input
                                        id="phone"
                                        placeholder="+977 98XXXXXXXX"
                                        {...register("phone")}
                                    />
                                    {errors.phone && (
                                        <p className="text-sm text-red-500">
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">
                                        Email Address{" "}
                                        <span className="text-primary">*</span>
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="aarav@gmail.com"
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-500">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Course */}
                            <div className="space-y-2">
                                <Label>
                                    Desired Vocational Course{" "}
                                    <span className="text-primary">*</span>
                                </Label>
                                <Select
                                    onValueChange={(value: string | null) => {
                                        if (value !== null) {
                                            setValue("course", value);
                                        }
                                    }}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Course" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {courses.map((course) => (
                                            <SelectItem
                                                key={course.id}
                                                value={course.title}
                                            >
                                                {course.title}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.course && (
                                    <p className="text-sm text-red-500">
                                        {errors.course.message}
                                    </p>
                                )}
                            </div>

                            {/* Career Goal */}
                            <div className="space-y-3">
                                <Label>
                                    Primary Career Goal{" "}
                                    <span className="text-primary">*</span>
                                </Label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {[
                                        {
                                            value: "overseas",
                                            label: "Overseas Employment",
                                        },
                                        {
                                            value: "nepal",
                                            label: "Job inside Nepal",
                                        },
                                        {
                                            value: "business",
                                            label: "Start Own Business",
                                        },
                                    ].map((option) => (
                                        <label
                                            key={option.value}
                                            className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${
                                                watch("careerGoal") ===
                                                option.value
                                                    ? "border-primary bg-peach-light"
                                                    : "border-border hover:border-primary/50"
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                value={option.value}
                                                {...register("careerGoal")}
                                                className="sr-only"
                                            />
                                            <span className="text-sm font-medium text-foreground">
                                                {option.label}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                                {errors.careerGoal && (
                                    <p className="text-sm text-red-500">
                                        {errors.careerGoal.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit */}
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-primary-dark text-white h-12 text-base font-semibold"
                            >
                                {isSubmitting
                                    ? "Submitting..."
                                    : "Submit Admission Application →"}
                            </Button>

                            <p className="text-xs text-center text-muted flex items-center justify-center gap-1.5">
                                <ShieldCheck size={14} />
                                Your information is strictly protected. Zero
                                spam.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
