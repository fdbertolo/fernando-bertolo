import Image from 'next/image';

export function HeroSection() {
    return (
        <section className="flex items-center justify-center h-[600px] flex-col relative">
                <h1 className="select-none mb-4 text-[14vw] xl:text-[10vw] text-center leading-[0.85] text-shadow-sm text-shadow-zinc-600 hover:text-shadow-lg transition-all ease-in-out hover:transition-all hover:ease-in-out">
                    Product <br /> Designer
                </h1>
                <h2 className="select-none mt-8 text-[3vw] xl:text-[2vw] text-center leading-[1.1] text-shadow-sm text-shadow-zinc-600 hover:text-shadow-lg transition-all ease-in-out hover:transition-all hover:ease-in-out">
                    I design products that people love to use.
                </h2>
                <picture className="flex">
                    <Image
                        src="/images/polygon.png"
                        style={{ objectFit: 'contain' }}
                        alt="Big and rounded mouse cursor"
                        width={200}
                        height={200}
                        className="absolute right-10"
                    />
                </picture>
            </section>
    );
}
