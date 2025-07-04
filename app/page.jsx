import { HeroSection } from "components/hero-section";
import { WorksGrid } from "components/works-grid";
import { AboutSection } from "components/about-section";
import { Footer } from "components/footer";

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <HeroSection />
            <WorksGrid />
            <AboutSection />
            <Footer />
        </div>
    );
}
