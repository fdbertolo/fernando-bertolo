'use client';

import Image from 'next/image';
import AnimatedCursor from './animated-cursor';
import { useRef } from 'react';

export function HeroSection() {
    const sectionRef = useRef(null);
    return (
        <section ref={sectionRef} className="flex items-center justify-center h-[600px] flex-col relative">
            <h1 className="select-none mb-4 text-[14vw] xl:text-[10vw] text-center leading-[0.85] text-shadow-sm text-shadow-zinc-600 hover:text-shadow-lg transition-all ease-in-out hover:transition-all hover:ease-in-out">
                Product <br /> Designer
            </h1>
            <h2 className="select-none mt-8 text-[3vw] xl:text-[2vw] text-center leading-[1.1] text-shadow-sm text-shadow-zinc-600 hover:text-shadow-lg transition-all ease-in-out hover:transition-all hover:ease-in-out">
                I design products that people love to use.
            </h2>
            <picture className="flex">
                <AnimatedCursor cursorImage="/images/polygon.png" containerRef={sectionRef} />
            </picture>
        </section>
    );
}
