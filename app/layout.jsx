import { Header } from '../components/header';
import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Fernando Bertolo - Product Designer'
    }
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
                        <main className="grow">{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}
