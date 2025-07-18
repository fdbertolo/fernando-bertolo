import { Markdown } from 'components/markdown';
import { Footer } from 'components/footer';
import CircularGallery from 'components/circular-gallery';

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
            <Footer />
        </>
    );
}
