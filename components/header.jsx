'use client';

import Image from 'next/image';
import Link from 'next/link';
import behanceLogo from 'public/images/behance-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';
import linkedInLogo from 'public/images/linkedin-logo.svg';
import myPhoto from 'public/me.png';
import { usePathname } from 'next/navigation';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Works', href: '/works' },
    { linkText: 'About', href: '/about' },
    { linkText: 'Contact', href: '/contact' }
];

export function Header() {
    const pathName = usePathname();
    return (
        <nav className="flex flex-wrap items-center gap-2 pt-6 pb-12 sm:pt-12 md:pb-24 w-full">
            <picture href="/" className="flex md:flex-1 gap-2 items-center order-1">
                <Image src={myPhoto} width={50} height={50} alt="A circular shaped photo of me" />
                <h4 className="font-bold">Fernando Bertolo</h4>
            </picture>
            {!!navItems?.length && (
                <ul className="flex gap-x-3 gap-y-1 flex-1 md:order-2 order-3 md:mt-0 mt-4">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            {item.href === pathName ? (
                                <Link
                                    href={item.href}
                                    className="underline-offset-6 inline-flex px-1.5 py-1 sm:px-3 sm:py-2"
                                >
                                    {item.linkText}
                                </Link>
                            ) : (
                                <Link href={item.href} className="no-underline inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
                                    {item.linkText}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            )}
            <ul className="flex gap-x-2 flex-1 justify-end md:order-3 order-2 min-w-max">
                <li>
                    <Link href="https://github.com/fdbertolo" target="_blank" rel="noopener noreferrer">
                        <Image src={githubLogo} alt="GitHub logo" className="md:w-7 w-9" />
                    </Link>
                </li>
                <li>
                    <Link href="https://behance.net/ferbertolo" target="_blank" rel="noopener noreferrer">
                        <Image src={behanceLogo} alt="GitHub logo" className="md:w-7 w-9" />
                    </Link>
                </li>
                <li>
                    <Link href="https://linkedin.com/in/fernandobertolo" target="_blank" rel="noopener noreferrer">
                        <Image src={linkedInLogo} alt="GitHub logo" className="md:w-7 w-9" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
