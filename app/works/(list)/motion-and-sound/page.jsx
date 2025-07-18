import { Markdown } from 'components/markdown';
import { Footer } from 'components/footer';

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
            <Footer />
        </>
    );
}
