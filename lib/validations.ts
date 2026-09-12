import { z } from "zod";

export const admissionSchema = z.object({
    fullName: z.string().min(2, "Full name is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    email: z.string().email("Valid email is required"),
    course: z.string().min(1, "Please select a course"),
    careerGoal: z.enum(["overseas", "nepal", "business"], {
        error: "Please select your primary career goal",
    }),
});

export type AdmissionFormValues = z.infer<typeof admissionSchema>;
