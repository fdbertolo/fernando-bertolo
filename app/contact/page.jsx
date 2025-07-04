import { Markdown } from 'components/markdown';
import { Footer } from 'components/footer';

export const metadata = {
    title: 'Classics'
};

const explainer = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Contact me</h1>
            <Markdown content={explainer} className="mb-12" />
            <div className="flex justify-center"></div>
            <Footer />
        </>
    );
}
