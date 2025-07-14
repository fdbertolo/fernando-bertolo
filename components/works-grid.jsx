import Image from 'next/image';
import Button from './button';

export function WorksGrid() {
    return (
        <section className="flex items-center justify-center flex-col">
            <div data-aos="fade-up" data-aos-duration="500" className="flex justify-center w-full flex-col items-center">
                <div className="border-r-2 border-zinc-400 relative h-30" />
                <div className="flex justify-center items-center w-full">
                    <h2 className="text-4xl font-bold my-4">What I do</h2>
                </div>
                <div className="border-r-2 border-zinc-400 relative h-5" />
            </div>
            <article data-aos="fade-up" data-aos-duration="500" className="flex justify-center gap-x-4 w-full md:flex-row flex-col mb-0 rounded-3xl bg-zinc-900/50 border border-neutral-50/40 md:border-transparent md:border-0 md:bg-transparent">
                <picture className="flex w-full md:w-1/2 md:py-25 py-0">
                    <Image
                        src="/images/work3.png"
                        style={{ objectFit: 'contain' }}
                        alt="Big and rounded mouse cursor"
                        width={600}
                        height={600}
                        className="p-4"
                    />
                </picture>
                <div className="border-r-2 border-zinc-400 relative md:block hidden w-[4px]">
                    <div className="w-4 h-4 bg-zinc-400 rounded-full absolute inset-0 m-auto ml-[-0.3rem]"></div>
                </div>
                <div className="flex flex-col justify-start items-start h-fit relative gap-2 p-6 rounded-3xl md:bg-zinc-900/50 md:border md:border-neutral-50/40 self-center w-full md:w-1/2">
                    <h3 className="flex w-full">UX/UI & Frontend development</h3>
                    <div className="flex gap-2">
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Skill 1
                        </span>
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Skill 2
                        </span>
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Skill 3
                        </span>
                    </div>
                    <p className="flex w-full">
                        Tejidos BENITEX specializes in technical fabrics for personal protection against risks such as
                        flash fire, electric arc, and molten metal splashes. Focused on innovation and excellence, it
                        develops inherent fabrics with fiber-level treatments, exceeding market standards.
                    </p>
                    <a href="/works/template">
                        <Button text="Go to project" />
                    </a>
                </div>
            </article>
            <div className="border-r-2 border-zinc-400 relative h-30 md:h-5 md:hidden" />

            <article data-aos="fade-up" data-aos-duration="500" className="flex justify-center gap-x-4 w-full md:flex-row flex-col mb-0 rounded-3xl bg-zinc-900/50 border border-neutral-50/40 md:border-transparent md:border-0 md:bg-transparent">
                <picture className="flex w-full md:w-1/2 md:py-25 py-0">
                    <Image
                        src="/images/work2.png"
                        style={{ objectFit: 'contain' }}
                        alt="Big and rounded mouse cursor"
                        width={600}
                        height={600}
                        className="p-4"
                    />
                </picture>
                <div className="border-r-2 border-zinc-400 relative md:block hidden w-[4px]">
                    <div className="w-4 h-4 bg-zinc-400 rounded-full absolute inset-0 m-auto ml-[-0.3rem]"></div>
                </div>
                <div className="flex flex-col justify-start items-start h-fit relative gap-2 p-6 rounded-3xl md:bg-zinc-900/50 md:border md:border-neutral-50/40 self-center w-full md:w-1/2">
                    <h3 className="flex w-full">Brand & Web design</h3>
                    <div className="flex gap-2">
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Skill 1
                        </span>
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Skill 2
                        </span>
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Skill 3
                        </span>
                    </div>
                    <p className="flex w-full">
                        Tejidos BENITEX specializes in technical fabrics for personal protection against risks such as
                        flash fire, electric arc, and molten metal splashes. Focused on innovation and excellence, it
                        develops inherent fabrics with fiber-level treatments, exceeding market standards.
                    </p>
                    <a href="/works/template">
                        <Button text="Go to project" />
                    </a>
                </div>
            </article>
            <div className="border-r-2 border-zinc-400 relative h-30 md:h-5 md:hidden" />
            <article data-aos="fade-up" data-aos-duration="500" className="flex justify-center gap-x-4 w-full md:flex-row flex-col mb-0 rounded-3xl bg-zinc-900/50 border border-neutral-50/40 md:border-transparent md:border-0 md:bg-transparent">
                <picture className="flex w-full md:w-1/2 md:py-25 py-0">
                    <Image
                        src="/images/work1.png"
                        style={{ objectFit: 'contain' }}
                        alt="Big and rounded mouse cursor"
                        width={600}
                        height={600}
                        className="p-4"
                    />
                </picture>
                <div className="border-r-2 border-zinc-400 relative md:block hidden w-[4px]">
                    <div className="w-4 h-4 bg-zinc-400 rounded-full absolute inset-0 m-auto ml-[-0.3rem]"></div>
                </div>
                <div className="flex flex-col justify-start items-start h-fit relative gap-2 p-6 rounded-3xl md:bg-zinc-900/50 md:border md:border-neutral-50/40 self-center w-full md:w-1/2">
                    <h3 className="flex w-full">Brand & Web design</h3>
                    <div className="flex gap-2">
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Skill 1
                        </span>
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Skill 2
                        </span>
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Skill 3
                        </span>
                    </div>
                    <p className="flex w-full">
                        Tejidos BENITEX specializes in technical fabrics for personal protection against risks such as
                        flash fire, electric arc, and molten metal splashes. Focused on innovation and excellence, it
                        develops inherent fabrics with fiber-level treatments, exceeding market standards.
                    </p>
                    <a href="/works/template">
                        <Button text="Go to project" />
                    </a>
                </div>
            </article>
            <div data-aos="fade-up" data-aos-duration="500" className="border-r-2 border-zinc-400 relative h-30 md:h-5" />
            <a href="/works">
                <Button text="See all projects" />
            </a>
        </section>
    );
}
