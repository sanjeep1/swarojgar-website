import Campus from "@/components/home/Campus";
import Enrollment from "@/components/home/Enrollment";
import Hero from "@/components/home/Hero";
import Programs from "@/components/home/Programs";
import Testimonials from "@/components/home/Testimonials";
import TrainingLabs from "@/components/home/TrainingLabs";
import TrustBadges from "@/components/home/TrustBadges";

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
