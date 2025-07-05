'use client';

import Image from 'next/image';
import AnimatedCursor from './animated-cursor';
import { useRef, useEffect, useState } from 'react';

export function HeroSection() {
    const sectionRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);

    const bubble1Ref = useRef(null);
    const bubble2Ref = useRef(null);
    const bubble3Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getTranslateY = (speed) => {
        return scrollY * speed;
    };

    return (
        <section ref={sectionRef} className="flex items-center justify-center h-[400px] md:h-[600px] flex-col relative overflow-visible"> {/* Añadí overflow-hidden de nuevo por si se mueven mucho */}
            <h1 className="z-2 select-none mb-4 text-[14vw] xl:text-[10vw] text-center leading-[0.85] text-shadow-sm text-shadow-zinc-600 hover:text-shadow-lg transition-all ease-in-out hover:transition-all hover:ease-in-out">
                Product <br /> Designer
            </h1>
            <h2 className="z-2 select-none mt-8 text-[3vw] xl:text-[2vw] text-center leading-[1.1] text-shadow-sm text-shadow-zinc-600 hover:text-shadow-lg transition-all ease-in-out hover:transition-all hover:ease-in-out">
                I design products that people love to use.
            </h2>
            <picture className="flex">
                <AnimatedCursor cursorImage="/images/polygon.png" containerRef={sectionRef} />
            </picture>

            <Image
                ref={bubble1Ref}
                src="/images/bubbleayr@1.png"
                width={1600}
                height={800}
                alt="bubble background"
                className="z-1 absolute inset-0 object-cover pointer-events-none overflow-visible m-auto mix-blend-color-burn rotate-[130deg]"
            />

            <Image
                ref={bubble2Ref}
                src="/images/bubbleayr@1.png"
                width={350}
                height={350}
                alt="bubble foreground 1"
                className="z-3 absolute inset-0 object-cover pointer-events-none overflow-visible m-auto mix-blend-exclusion"
                style={{ transform: `translate(100%, -60%) translateY(${getTranslateY(0.5)}px) rotate(130deg)` }}
            />

            <Image
                ref={bubble3Ref}
                src="/images/bubblevya@1.png"
                width={300}
                height={300}
                alt="bubble foreground 2"
                className="z-1 absolute inset-0 object-cover pointer-events-none overflow-visible m-auto mix-blend-exclusion"
                style={{ transform: `translate(-120%, 70%) translateY(${getTranslateY(-0.5)}px) rotate(130deg)` }}
            />
        </section>
    );
}