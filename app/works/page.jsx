import { workItems } from './work-list';
import { Footer } from 'components/footer';
import WorksList from 'components/works-list';
import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'My works',
    description:
        'A showcase of my design and development projects, highlighting my skills in creating functional and visually appealing products.',
    keywords: 'design, development, portfolio, projects, UI/UX, React, Angular, Design Systems',
    authors: ['Fernando Bertolo']
};

const explainer = `
My works spans <b>UI/UX design and Frontend development</b>, alongside <b>graphic design, illustration, and branding</b>. From digital interfaces to apparel design, I craft compelling visuals and experiences that captivate and connect.`;

export default function Page() {
    return (
        <>
            <WorksList items={workItems}>
                <h1 className="mb-8">My works</h1>
                <Markdown content={explainer} className="mb-12" />
            </WorksList>
            <Footer />
        </>
    );
}