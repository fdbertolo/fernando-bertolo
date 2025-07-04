import Link from 'next/link';
import Image from 'next/image';
import behanceLogo from 'public/images/behance-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';
import linkedInLogo from 'public/images/linkedin-logo.svg';
import Button from './button';
import { Markdown } from './markdown';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16 flex align-items-center justify-between flex-col md:flex-row gap-4">
            <a href="mailto:fdbertolo@gmail.com">
                <Button text="Contact Me" />
            </a>
            <Markdown content={' © 2025 Created with magic and love by <b> Fernando Bertolo</b>'} className="block md:flex items-center justify-center gap-1.5 flex-1" />
            <ul className="flex gap-x-2 justify-end items-center">
                <li>
                    <Link href="https://github.com/fdbertolo" target="_blank" rel="noopener noreferrer">
                        <Image src={githubLogo} alt="GitHub logo" className="w-7" />
                    </Link>
                </li>
                <li>
                    <Link href="https://behance.net/ferbertolo" target="_blank" rel="noopener noreferrer">
                        <Image src={behanceLogo} alt="GitHub logo" className="w-7" />
                    </Link>
                </li>
                <li>
                    <Link href="https://linkedin.com/in/fernandobertolo" target="_blank" rel="noopener noreferrer">
                        <Image src={linkedInLogo} alt="GitHub logo" className="w-7" />
                    </Link>
                </li>
            </ul>
        </footer>
    );
}
