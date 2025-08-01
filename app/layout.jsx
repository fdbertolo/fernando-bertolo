import { Header } from '/components/header';
import '/styles/globals.css';
import { AOSInitializer } from '/components/aos-initializer';
export const metadata = {
    title: 'Fernando Bertolo - Product Designer',
    description: 'Portfolio of Fernando Bertolo, a Product Designer specializing in UI design and Design Systems.',
    keywords: 'design, development, portfolio, projects, UI/UX, React, Angular, Design Systems',
    authors: ['Fernando Bertolo'],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/me.png" sizes="any" />
            </head>
            <body className="antialiased text-white bg-zinc-950">
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12 overflow-hidden">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow flex flex-col">{children}</main>
                    </div>
                </div>
                <AOSInitializer />
            </body>
        </html>
    );
}
