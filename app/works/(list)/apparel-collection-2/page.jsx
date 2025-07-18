import { Markdown } from 'components/markdown';
import { Footer } from 'components/footer';
import CircularGallery from 'components/circular-gallery';

export const metadata = {
    title: 'Apparel Collection & Illustration'
};

const galleryItems = [
    { image: `/images/projects/apparel-2.1.jpg`, text: '' },
    { image: `/images/projects/apparel-2.2.jpg`, text: '' },
    { image: `/images/projects/apparel-2.3.jpg`, text: '' },
    { image: `/images/projects/apparel-2.4.jpg`, text: '' },
    { image: `/images/projects/apparel-2.5.jpg`, text: '' },
    { image: `/images/projects/apparel-2.6.jpg`, text: '' },
    { image: `/images/projects/apparel-2.7.jpg`, text: '' },
    { image: `/images/projects/apparel-2.8.jpg`, text: '' },
    { image: `/images/projects/apparel-2.9.jpg`, text: '' },
    { image: `/images/projects/apparel-2.10.jpg`, text: '' },
    { image: `/images/projects/apparel-2.11.jpg`, text: '' },
    { image: `/images/projects/apparel-2.12.jpg`, text: '' },
    { image: `/images/projects/apparel-2.13.jpg`, text: '' },
    { image: `/images/projects/apparel-2.14.jpg`, text: '' },
    { image: `/images/projects/apparel-2.15.jpg`, text: '' },
    { image: `/images/projects/apparel-2.16.jpg`, text: '' },
    { image: `/images/projects/apparel-2.17.jpg`, text: '' },
];

const explainer = `
Developed a new apparel collection, focusing on creating unique print designs and original illustrations. From concept to final artwork, I brought the collection to life.`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Apparel Collection & Illustration</h1>
            <Markdown content={explainer} />
            <div className="flex justify-center w-full">
                <div className="md:h-[800px] h-[600px] relative">
                    <CircularGallery items={galleryItems} bend={1} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
                </div>
            </div>
            <Footer />
        </>
    );
}
