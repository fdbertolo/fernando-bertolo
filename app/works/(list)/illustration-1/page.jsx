import { Markdown } from 'components/markdown';
import { Footer } from 'components/footer';
import CircularGallery from 'components/circular-gallery';

export const metadata = {
    title: 'Digital Illustrations & Refinement'
};

const galleryItems = [
    { image: `/images/projects/illustration-1.1.png`, text: '' },
    { image: `/images/projects/illustration-1.2.png`, text: '' },
    { image: `/images/projects/illustration-1.3.png`, text: '' },
    { image: `/images/projects/illustration-1.4.png`, text: '' },
    { image: `/images/projects/illustration-1.5.png`, text: '' },
    { image: `/images/projects/illustration-1.6.png`, text: '' },
    { image: `/images/projects/illustration-1.7.png`, text: '' }
];

const explainer = `
Created digital illustrations initially on a mobile phone, then refined and finalized them in Illustrator. Showcases a versatile approach to digital art creation.`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Digital Illustrations & Refinement</h1>
            <Markdown content={explainer} />
            <div className="flex justify-center w-full">
                <div style={{ height: '800px', position: 'relative' }}>
                    <CircularGallery items={galleryItems} bend={2} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
                </div>
            </div>
            <Footer />
        </>
    );
}
