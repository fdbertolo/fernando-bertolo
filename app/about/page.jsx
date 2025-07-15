import { Markdown } from 'components/markdown';
import { Footer } from 'components/footer';
import Button from 'components/button';
import TiltedCard from 'components/tilted-card';

export const metadata = {
    title: 'About me',
    description: 'Learn more about Fernando Bertolo, his work, and his journey in the tech industry.'
};

const explainer = `I blend **UI/UX design** with **frontend development** to craft intuitive and engaging digital experiences. My passion extends to **graphic design**, **illustration**, and **motion graphics**, creating compelling visuals. From **branding** to **apparel design** and **art installations**, I bring a holistic creative vision to every project, always focusing on impactful results.`;
const explainer2 = `When I'm not immersed in **design and code**, you'll likely find me on the **padel court**, enjoying a good game. As a proud **Argentinian from Buenos Aires**, I bring a fun-loving spirit to everything I do. I love to laugh, share good times with friends and family, and explore new places. Whether it's cracking a joke or planning my next adventure, I'm always looking for ways to enjoy life to the fullest!`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">About me</h1>

            <div className="flex gap-4">
                <div className="flex w-full">
                    <div className="flex flex-col gap-2">
                        <h3>When I&apos;m working</h3>
                        <Markdown content={explainer} className="mb-4" />
                        <a href="/fernando-bertolo-resume.pdf" download="fernando-bertolo-resume.pdf" className='mb-16'>
                            <Button text="Download my resume" />
                        </a>
                        <h3>Beyond work!</h3>
                        <Markdown content={explainer2} className="mb-6" />
                    </div>
                </div>
                <div className="flex w-full justify-center flex-col items-center gap-4">
                    <TiltedCard
                        imageSrc="/images/back.png"
                        altText="Picture of Fernando Bertolo"
                        containerHeight="400px"
                        containerWidth="350px"
                        imageHeight="400px"
                        imageWidth="350px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                    />
                    <iframe
                        src="https://open.spotify.com/embed/playlist/0h2P5zJxWy9eCMHg9a6qeJ?utm_source=generator&theme=0"
                        width="350px"
                        height="400px"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <Footer />
        </>
    );
}
