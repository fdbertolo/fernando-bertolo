import Image from 'next/image';

export function WorksGrid() {
    return (
        <section className="flex items-center justify-center flex-col">
            <article className="flex justify-center gap-4 w-full">
                <picture className="flex w-full py-30">
                    <Image
                        src="/images/polygon.png"
                        style={{ objectFit: 'contain' }}
                        alt="Big and rounded mouse cursor"
                        width={200}
                        height={200}
                    />
                </picture>
                <div className="border-r-2 border-zinc-400 relative">
                    <div className="w-4 h-4 bg-zinc-400 rounded-full absolute inset-0 m-auto ml-[-0.45rem]"></div>
                </div>
                <h1 className="flex w-full py-30">
                    Product <br /> Designer
                </h1>
            </article>
            <article className="flex justify-center gap-4 w-full">
                <h1 className="flex w-full py-30">
                    Product <br /> Designer
                </h1>
                <div className="border-r-2 border-zinc-400 relative">
                    <div className="w-4 h-4 bg-zinc-400 rounded-full absolute inset-0 m-auto ml-[-0.45rem]"></div>
                </div>
                <picture className="flex w-full py-30">
                    <Image
                        src="/images/polygon.png"
                        style={{ objectFit: 'contain' }}
                        alt="Big and rounded mouse cursor"
                        width={200}
                        height={200}
                    />
                </picture>
            </article>
            <article className="flex justify-center gap-4 w-full">
                <picture className="flex w-full py-30">
                    <Image
                        src="/images/polygon.png"
                        style={{ objectFit: 'contain' }}
                        alt="Big and rounded mouse cursor"
                        width={200}
                        height={200}
                    />
                </picture>
                <div className="border-r-2 border-zinc-400 relative">
                    <div className="w-4 h-4 bg-zinc-400 rounded-full absolute inset-0 m-auto ml-[-0.45rem]"></div>
                </div>
                <h1 className="flex w-full py-30">
                    Product <br /> Designer
                </h1>
            </article>
        </section>
    );
}
