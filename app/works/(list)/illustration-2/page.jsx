import { Markdown } from 'components/markdown';
import { Footer } from 'components/footer';
import CircularGallery from 'components/circular-gallery';

export const metadata = {
    title: 'Personal T-Shirt Brand & Exhibit'
};

const galleryItems = [
    { image: `/images/projects/fuk.1.jpg`, text: '' },
    { image: `/images/projects/fuk.2.jpg`, text: '' },
    { image: `/images/projects/fuk.3.jpg`, text: '' },
    { image: `/images/projects/fuk.4.jpg`, text: '' },
    // { image: `/images/projects/fuk.5.jpg`, text: '' },
    { image: `/images/projects/fuk.6.jpg`, text: '' },
    { image: `/images/projects/fuk.7.jpg`, text: '' },
    { image: `/images/projects/fuk.8.jpg`, text: '' },
    { image: `/images/projects/fuk.9.jpg`, text: '' },
    { image: `/images/projects/fuk.10.jpg`, text: '' },
    { image: `/images/projects/fuk.11.jpg`, text: '' },
    { image: `/images/projects/fuk.12.jpg`, text: '' },
    { image: `/images/projects/fuk.13.jpg`, text: '' },
    { image: `/images/projects/fuk.14.jpg`, text: '' },

];

const explainer = `
Launched a personal t-shirt brand. Developed the visual identity, designed unique prints, and created a stand for display at the "Puro Diseño" fair.`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Personal T-Shirt Brand & Exhibit</h1>
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
