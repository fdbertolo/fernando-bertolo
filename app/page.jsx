import { HeroSection } from "components/hero-section";
import { WorksGrid } from "components/works-grid";

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <HeroSection />
            <WorksGrid />
        </div>
    );
}
