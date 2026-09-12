import Campus from "@/components/sections/Campus";
import Enrollment from "@/components/sections/Enrollment";
import Hero from "@/components/sections/Hero";
import Programs from "@/components/sections/Programs";
import Testimonials from "@/components/sections/Testimonials";
import TrainingLabs from "@/components/sections/TrainingLabs";
import TrustBadges from "@/components/sections/TrustBadges";

export default function Home() {
    return (
        <>
            <Hero />
            <TrustBadges />
            <Programs />
            <TrainingLabs />
            <Testimonials />
            <Enrollment />
            <Campus />
        </>
    );
}
