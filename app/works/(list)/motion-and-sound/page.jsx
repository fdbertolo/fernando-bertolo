import { Markdown } from 'components/markdown';
import { Footer } from 'components/footer';
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
    title: 'Motion graphics & Sound Design'
};

const explainer = `
Created a dynamic motion graphic introduction for videos using After Effects and Illustrator. This project also included original sound design for a complete audiovisual experience.`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Motion graphics & Sound Design</h1>
            <Markdown content={explainer} className="mb-12" />
            <div className="flex justify-center flex-col">
                <iframe
                    src="https://player.vimeo.com/video/426363885?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    width="100%"
                    height="600px"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    title="Partículas"
                    className="h-60 md:h-[600px] mb-8"
                ></iframe>
                <iframe
                    src="https://player.vimeo.com/video/426364529?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    width="100%"
                    height="600px"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    title="Grillas"
                    className="h-60 md:h-[600px] mb-8"
                ></iframe>
                <iframe
                    src="https://player.vimeo.com/video/426364572?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    width="100%"
                    height="600px"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    title="Zooms"
                    className="h-60 md:h-[600px] mb-8"
                ></iframe>
            </div>
            <WorksList items={workItems} haveSkills={false}>
                <h3 className="mt-8 mb-4 text-md">Other projects</h3>
            </WorksList>
            <Footer />
        </>
    );
}
