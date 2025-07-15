import { Markdown } from 'components/markdown';
import { Footer } from 'components/footer';

export const metadata = {
    title: 'Under construction',
};

const explainer = `
I'm working on this! Will be ready soon 🚀`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Under construction</h1>
            <Markdown content={explainer} className="mb-12" />
            <div className="flex justify-center">
                <picture className="flex">
                    <img
                        src="/images/under-construction.png"
                        alt="Image of a designer working on new screens"
                        width={390}
                        height={390}
                    />
                </picture>
            </div>
            <Footer />
        </>
    );
}
