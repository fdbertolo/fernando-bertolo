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
            <div className="flex justify-center flex-col gap-8 align-center items-center my-auto">
                <Markdown className="md:text-6xl text-4xl font-bold" content="Do you want to"></Markdown>
                <RotatingText
                    texts={[
                        'Create a new app?',
                        'Design a new product?',
                        'Build a new website?',
                        'Collaborate on a project?',
                        'Find a freelancer?',
                        'Implement a design system?',
                        'Improve your UX?',
                        'Get help with your project?',
                        'Find a mentor?',
                        'Discuss an idea?',
                        'Get a design review?',
                        'Share your ideas?',
                        'Find a design partner?',
                        'Get help with your startup?',
                        'Build something amazing?',
                        'Get a design audit?',
                        'Create a new brand?',
                        'Find a design workshop?',
                        'Improve your product?',
                        'Optimize your process?',
                        'Empower your team?',
                        'Learn more about design?',
                        'Boost your career?',
                    ]}
                    mainClassName="px-4 sm:px-2 md:px-3 bg-cyan-300 text-white font-bold md:text-6xl text-xl overflow-hidden py-4 sm:py-1 md:py-2 justify-center rounded-lg text-shadow-lg/5"
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
