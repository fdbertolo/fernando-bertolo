import Link from 'next/link';
import Image from 'next/image';
import behanceLogo from 'public/images/behance-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';
import linkedInLogo from 'public/images/linkedin-logo.svg';
import Button from './button';
import { Markdown } from './markdown';

export function Footer() {
    return (
        <footer data-aos="fade-up" data-aos-duration="500" className="pt-16 pb-12 sm:pt-24 sm:pb-16 flex align-items-center justify-between items-center gap-y-10 md:flex-row flex-wrap">
            <a href="mailto:fdbertolo@gmail.com" className='md:order-1 order-2 w-1/2 md:w-auto'>
                <Button text="Contact Me" />
            </a>
            <Markdown
                content={'<b> Fernando Bertolo</b> © 2025 All rights reserved'} 
                className="md:order-2 order-1 block md:flex items-center justify-center gap-1.5 flex-1 w-full md:w-auto whitespace-nowrap text-center"
            />
            <ul className="flex gap-x-2 justify-end items-center order-3 w-1/2 md:w-auto">
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
