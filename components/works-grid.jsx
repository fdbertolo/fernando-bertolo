import Image from 'next/image';

export function WorksGrid() {
    return (
        <section className="flex items-center justify-center flex-col">
            <article className="flex justify-center gap-x-4 w-full md:flex-row flex-col mb-24 md:mb-0">
                <picture className="flex w-full md:py-25 py-6">
                    <Image
                        src="/images/work1.png"
                        style={{ objectFit: 'contain' }}
                        alt="Big and rounded mouse cursor"
                        width={600}
                        height={600}
                    />
                </picture>
                <div className="border-r-2 border-zinc-400 relative md:block hidden">
                    <div className="w-4 h-4 bg-zinc-400 rounded-full absolute inset-0 m-auto ml-[-0.45rem]"></div>
                </div>
                <div className="flex flex-col justify-start items-start h-fit relative gap-2 p-6 rounded-3xl bg-neutral-50/10 border border-neutral-50/40 self-center w-full">
                    <h3 className="flex w-full">Brand & Web design</h3>
                    <p className="flex w-full">
                        Tejidos BENITEX specializes in technical fabrics for personal protection against risks such as
                        flash fire, electric arc, and molten metal splashes. Focused on innovation and excellence, it
                        develops inherent fabrics with fiber-level treatments, exceeding market standards.
                    </p>
                    <div className="flex gap-3">
                        <span className="flex justify-center py-2 px-4 rounded-full bg-neutral-50/10 border border-neutral-50/40">
                            Skill 1
                        </span>
                        <span className="flex justify-center py-2 px-4 rounded-full bg-neutral-50/10 border border-neutral-50/40">
                            Skill 2
                        </span>
                        <span className="flex justify-center py-2 px-4 rounded-full bg-neutral-50/10 border border-neutral-50/40">
                            Skill 3
                        </span>
                    </div>
                </div>
            </article>
            <article className="flex justify-center gap-x-4 w-full md:flex-row flex-col mb-24 md:mb-0">
                <picture className="flex w-full md:py-25 py-6">
                    <Image
                        src="/images/work1.png"
                        style={{ objectFit: 'contain' }}
                        alt="Big and rounded mouse cursor"
                        width={600}
                        height={600}
                    />
                </picture>
                <div className="border-r-2 border-zinc-400 relative md:block hidden">
                    <div className="w-4 h-4 bg-zinc-400 rounded-full absolute inset-0 m-auto ml-[-0.45rem]"></div>
                </div>
                <div className="flex flex-col justify-start items-start h-fit relative gap-2 p-6 rounded-3xl bg-neutral-50/10 border border-neutral-50/40 self-center w-full">
                    <h3 className="flex w-full">Brand & Web design</h3>
                    <p className="flex w-full">
                        Tejidos BENITEX specializes in technical fabrics for personal protection against risks such as
                        flash fire, electric arc, and molten metal splashes. Focused on innovation and excellence, it
                        develops inherent fabrics with fiber-level treatments, exceeding market standards.
                    </p>
                    <div className="flex gap-3">
                        <span className="flex justify-center py-2 px-4 rounded-full bg-neutral-50/10 border border-neutral-50/40">
                            Skill 1
                        </span>
                        <span className="flex justify-center py-2 px-4 rounded-full bg-neutral-50/10 border border-neutral-50/40">
                            Skill 2
                        </span>
                        <span className="flex justify-center py-2 px-4 rounded-full bg-neutral-50/10 border border-neutral-50/40">
                            Skill 3
                        </span>
                    </div>
                </div>
            </article>
            <article className="flex justify-center gap-x-4 w-full md:flex-row flex-col mb-8">
                <picture className="flex w-full md:py-25 py-6">
                    <Image
                        src="/images/work1.png"
                        style={{ objectFit: 'contain' }}
                        alt="Big and rounded mouse cursor"
                        width={600}
                        height={600}
                    />
                </picture>
                <div className="border-r-2 border-zinc-400 relative md:block hidden">
                    <div className="w-4 h-4 bg-zinc-400 rounded-full absolute inset-0 m-auto ml-[-0.45rem]"></div>
                </div>
                <div className="flex flex-col justify-start items-start h-fit relative gap-2 p-6 rounded-3xl bg-neutral-50/10 border border-neutral-50/40 self-center w-full">
                    <h3 className="flex w-full">Brand & Web design</h3>
                    <p className="flex w-full">
                        Tejidos BENITEX specializes in technical fabrics for personal protection against risks such as
                        flash fire, electric arc, and molten metal splashes. Focused on innovation and excellence, it
                        develops inherent fabrics with fiber-level treatments, exceeding market standards.
                    </p>
                    <div className="flex gap-3">
                        <span className="flex justify-center py-2 px-4 rounded-full bg-neutral-50/10 border border-neutral-50/40">
                            Skill 1
                        </span>
                        <span className="flex justify-center py-2 px-4 rounded-full bg-neutral-50/10 border border-neutral-50/40">
                            Skill 2
                        </span>
                        <span className="flex justify-center py-2 px-4 rounded-full bg-neutral-50/10 border border-neutral-50/40">
                            Skill 3
                        </span>
                    </div>
                </div>
            </article>
        </section>
    );
}
