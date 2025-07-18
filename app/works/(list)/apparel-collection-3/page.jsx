import { Markdown } from 'components/markdown';
import { Footer } from 'components/footer';
import CircularGallery from 'components/circular-gallery';

export const metadata = {
    title: 'Apparel Collection Design'
};

const galleryItems = [
    { image: `/images/projects/apparel-3.1.png`, text: '' },
    { image: `/images/projects/apparel-3.2.png`, text: '' },
    { image: `/images/projects/apparel-3.3.png`, text: '' },
    { image: `/images/projects/apparel-3.5.png`, text: '' },
    { image: `/images/projects/apparel-3.6.png`, text: '' },
    { image: `/images/projects/apparel-3.7.png`, text: '' },
    { image: `/images/projects/apparel-3.8.png`, text: '' },
    { image: `/images/projects/apparel-3.9.png`, text: '' },
];

const explainer = `
Designed another apparel collection, emphasizing urban-inspired print designs and detailed illustrations. Focused on cohesive visual themes for a distinct clothing line.`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Apparel Collection Design</h1>
            <Markdown content={explainer} />
            <div className="flex justify-center w-full">
                <div style={{ height: '800px', position: 'relative' }} className="md:h-[800px] h-[600px]">
                    <CircularGallery items={galleryItems} bend={1} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
                </div>
            </div>
            <Footer />
        </>
    );
}
