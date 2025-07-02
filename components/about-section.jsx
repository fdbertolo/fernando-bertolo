import { Markdown } from 'components/markdown';

const aboutMe = `Product Designer with over 8 years of experience creating digital solutions that bridge the gap between design and technology. I specialize in building scalable Design Systems and translating high-fidelity prototypes (Figma) into clean, efficient code using React, Angular, and React Native. Passionate about optimizing the user experience (UX) to enhance product functionality and visual appeal. I actively seek challenges that allow me to contribute value in collaborative, agile environments.`;

export function AboutSection() {
    return (
        <section className="flex items-center justify-center flex-col mt-20">
            <h2 className="text-4xl font-bold">About Me</h2>
            <Markdown content={aboutMe} className="py-10 text-xl" />
        </section>
    );
}
