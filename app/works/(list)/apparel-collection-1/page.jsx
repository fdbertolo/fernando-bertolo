import { Markdown } from 'components/markdown';
import { Footer } from 'components/footer';
import CircularGallery from 'components/circular-gallery';
import WorksList from 'components/works-list';

export const workItems = [
    {
        image: '/images/covers/cover-1.jpg',
        title: 'UX/UI & Frontend Development',
        subtitle:
            'Designed and developed an internal desktop app. Process included user interviews, usability testing, research, wireframing, prototyping, and React/Next.js implementation with a design system.',
        handle: ['UI Design', 'UX Design', 'Design System', 'Frontend'],
        borderColor: '#3B82F6', // Azul
        gradient: 'linear-gradient(180deg, #3B82F6, #000)',
        url: '/works/case-study-1'
    },
    {
        image: '/images/covers/cover-23.png',
        title: 'Branding & E-commerce UI/UX',
        subtitle:
            'Created a hardware e-commerce platform. Involved competitive benchmarking, metric analysis, visual identity, wireframing, and interactive prototyping for a robust user experience.',
        handle: ['Branding', 'UI Design', 'UX Design', 'E-commerce'],
        borderColor: '#9646e5', // Púrpura
        gradient: 'linear-gradient(180deg, #9646e5, #000)',
        url: '/works/template'
    },
    {
        image: '/images/covers/cover-16.png',
        title: 'Brand & Institutional Web Design',
        subtitle:
            "Transformed a brand's online presence. Started with branding, including moodboard and logo, then developed a comprehensive brand manual and crafted all content for their new institutional website.",
        handle: ['Branding', 'Graphic Design', 'Frontend', 'UI Design'],
        borderColor: '#10B981', // Verde
        gradient: 'linear-gradient(180deg, #10B981, #000)',
        url: '/works/template'
    }
];

export const metadata = {
    title: 'Apparel Collection: Digital Illustrations'
};

const galleryItems = [
    { image: `/images/projects/apparel-1.1.jpg`, text: '' },
    { image: `/images/projects/apparel-1.2.jpg`, text: '' },
    { image: `/images/projects/apparel-1.3.jpg`, text: '' },
    { image: `/images/projects/apparel-1.4.jpg`, text: '' },
    { image: `/images/projects/apparel-1.5.jpg`, text: '' },
    { image: `/images/projects/apparel-1.6.jpg`, text: '' }
];

const explainer = `
Created digital illustrations for another collection project. The illustrations shows a variety of styles and themes, showcasing versatility in digital art.`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Apparel Collection: Digital Illustrations</h1>
            <Markdown content={explainer} />
            <div className="flex justify-center w-full">
                <div className="md:h-[800px] h-[500px] relative">
                    <CircularGallery
                        items={galleryItems}
                        bend={1}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        scrollEase={0.02}
                    />
                </div>
            </div>
            <WorksList items={workItems} haveSkills={false}>
                <h3 className="mt-8 mb-4 text-md">Other projects</h3>
            </WorksList>
            <Footer />
        </>
    );
}
