import AboutSection from "../components/about-us/About";
import { FAQsSection } from "../components/faq-section/FAQSection";
import Hero from "../components/hero/HeroSection";
import PartnersSection from "../components/partners/PartnersSection";
import SpeakerSection from "../components/speaker-section/SpeakerSection";
import WhyYouShouldJoin from "../components/why-attend/WhyAttend";

export default function LandingPage() {
    return (
        <>
            <Hero />
            <PartnersSection />
            <AboutSection />
            <WhyYouShouldJoin />
            <SpeakerSection />
            <FAQsSection />
        </>
    )
}
