import { Markdown } from 'components/markdown';
import { Footer } from 'components/footer';
import CircularGallery from 'components/circular-gallery';

export const metadata = {
    title: 'Apparel Collection: Nature Themed'
};

const galleryItems = [
    { image: `/images/projects/apparel-4.1.jpg`, text: '' },
    { image: `/images/projects/apparel-4.2.jpg`, text: '' },
    { image: `/images/projects/apparel-4.3.jpg`, text: '' },
    { image: `/images/projects/apparel-4.4.jpg`, text: '' },
    { image: `/images/projects/apparel-4.5.jpg`, text: '' },
    { image: `/images/projects/apparel-4.6.jpg`, text: '' },
    { image: `/images/projects/apparel-4.7.jpg`, text: '' },
    { image: `/images/projects/apparel-4.1.png`, text: '' },
    { image: `/images/projects/apparel-4.3.png`, text: '' },
    { image: `/images/projects/apparel-4.4.png`, text: '' },
    { image: `/images/projects/apparel-4.5.png`, text: '' },
    { image: `/images/projects/apparel-4.6.png`, text: '' },
];

const explainer = `
Another apparel collection project, this time with a focus on nature-inspired prints and intricate illustrations. Guided the design from concept to final product.`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Apparel Collection: Nature Themed</h1>
            <Markdown content={explainer} />
            <div className="flex justify-center w-full">
                <div className="md:h-[800px] h-[600px] relative">
                    <CircularGallery
                        items={galleryItems}
                        bend={1}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        scrollEase={0.02}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}
