import { Markdown } from 'components/markdown';
import { Footer } from 'components/footer';
import Button from 'components/button';
import RotatingText from 'components/rotating-text';

export const metadata = {
    title: 'Contact'
};

export default async function Page() {
    return (
        <>
            <h1 className="mb-8 hidden">Contact me</h1>
            <div className="flex justify-center flex-col gap-4 align-center items-center my-auto">
                <Markdown className="md:text-5xl text-2xl font-semibold" content="Do you want to"></Markdown>
                <RotatingText
                    texts={[
                        'create a new app?',
                        'design a new product?',
                        'build a new website?',
                        'collaborate on a project?',
                        'find a freelancer?',
                        'implement a design system?',
                        'improve your UX?',
                        'get help with your project?',
                        'find a mentor?',
                        'discuss an idea?',
                        'get a design review?',
                        'share your ideas?',
                        'find a design partner?',
                        'get help with your startup?',
                        'build something amazing?',
                        'get a design audit?',
                        'create a new brand?',
                        'find a design workshop?',
                        'improve your product?',
                        'optimize your process?',
                        'empower your team?',
                        'learn more about design?',
                        'boost your career?',
                    ]}
                    mainClassName="px-4 sm:px-2 md:px-3 bg-cyan-300 text-white font-semibold md:text-5xl text-xl overflow-hidden py-4 sm:py-1 md:py-2 justify-center rounded-lg text-shadow-lg/5"
                    staggerFrom={'last'}
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-120%' }}
                    staggerDuration={0.02}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: 'spring', damping: 30, stiffness: 900 }}
                    rotationInterval={2500}
                />
                <a href="mailto:fdbertolo@gmail.com" className="mt-24 md:mt-12">
                    <Button text="Let's get in touch!" />
                </a>
            </div>
            <Footer />
        </>
    );
}
