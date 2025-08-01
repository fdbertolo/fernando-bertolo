'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ChromaGrid = ({ items, className = '', radius = 800, damping = 0.45, fadeOut = 0.6, ease = 'power3.out' }) => {
    const rootRef = useRef(null);
    const fadeRef = useRef(null);
    const setX = useRef(null);
    const setY = useRef(null);
    const pos = useRef({ x: 0, y: 0 });

    const data = items?.length ? items : [];

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px');
        setY.current = gsap.quickSetter(el, '--y', 'px');
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x, y) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true
        });
    };

    const handleMove = (e) => {
        const r = rootRef.current.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: fadeOut,
            overwrite: true
        });
    };

    const handleCardClick = (url) => {
        if (url) {
            window.location.href = `${window.location.origin}${url}`;
        }
    };

    const handleCardMove = (e) => {
        const c = e.currentTarget;
        const rect = c.getBoundingClientRect();
        c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    return (
        <div
            ref={rootRef}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            className={`relative w-full grid grid-cols-1 h-auto md:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-3 backdrop-opacity-0 ${className}`}
            style={{
                '--r': `${radius}px`,
                '--x': '50%',
                '--y': '50%'
            }}
        >
            {data.map((c, i) => (
                <article
                    key={i}
                    onMouseMove={handleCardMove}
                    onClick={() => handleCardClick(c.url)}
                    className="group h-full relative flex flex-col w-full rounded-[20px] overflow-hidden border-transparent transition-colors duration-300 cursor-pointer outline-2 outline-transparent hover:outline-zinc-700"
                    style={{
                        '--card-border': c.borderColor || 'transparent',
                        background: c.gradient,
                        '--spotlight-color': 'rgba(255,255,255,0.3)'
                    }}
                >
                    <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
                        style={{
                            background:
                                'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 50%)'
                        }}
                    />
                    <div className="relative z-10 flex-1 p-[10px] box-border">
                        <img
                            src={c.image}
                            alt={c.title}
                            loading="lazy"
                            className="w-full h-full object-cover rounded-[10px]"
                        />
                    </div>
                    <footer className="relative z-10 p-3 text-white font-sans flex flex-col gap-x-3 gap-y-1">
                        <h3 className="m-0 text-[1.05rem] font-semibold">{c.title}</h3>
                        {Array.isArray(c.handle) && c.handle.length > 0 ? (
                            <div className="flex flex-wrap gap-1">
                                {c.handle.map((handleItem, idx) => (
                                    <span
                                        key={idx}
                                        className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit"
                                    >
                                        {handleItem}
                                    </span>
                                ))}
                            </div>
                        ) : c.handle ? (
                            <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                                {c.handle}
                            </span>
                        ) : null}
                        <p className="m-0 text-[0.85rem] opacity-85">{c.subtitle}</p>
                        {c.location && <span className="text-[0.85rem] opacity-85">{c.location}</span>}
                    </footer>
                </article>
            ))}
            <div
                className="absolute inset-0 pointer-events-none z-30"
                style={{
                    backdropFilter: 'grayscale(1) brightness(0.78)',
                    WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
                    background: 'rgba(0,0,0,0.001)',
                    maskImage:
                        'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)',
                    WebkitMaskImage:
                        'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)'
                }}
            />
            <div
                ref={fadeRef}
                className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
                style={{
                    backdropFilter: 'grayscale(1) brightness(0.78)',
                    WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
                    background: 'rgba(0,0,0,0.001)',
                    maskImage:
                        'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
                    WebkitMaskImage:
                        'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
                    opacity: 1
                }}
            />
        </div>
    );
};

export default ChromaGrid;
