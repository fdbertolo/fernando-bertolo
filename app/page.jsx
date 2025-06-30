import Image from 'next/image';

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section className="mt-20 h-[600px]">
                <h1 className="select-none mb-4 text-[14vw] xl:text-[10vw] text-center leading-[0.85] text-shadow-sm text-shadow-zinc-600 hover:text-shadow-lg transition-all ease-in-out hover:transition-all hover:ease-in-out">Product <br /> Designer</h1>
                <picture className='flex relative'>
                    <Image
                        src="/images/polygon.png"
                        style={{ objectFit: 'contain' }}
                        alt="Big and rounded mouse cursor"
                        width={200}
                        height={200}
                        className='absolute right-10'
                    />
                </picture>
            </section>
        </div>
    );
}
