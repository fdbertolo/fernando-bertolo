import { Markdown } from 'components/markdown';
import Button from 'components/button';

const aboutMe = `I'm a <b>Product Designer</b> passionate about <b>UI design</b> and building  scalable <b>Design Systems. </b> With robust <b> HTML, CSS, and JavaScript </b> expertise, I translate <b>Figma</b> prototypes into clean <b>React or Angular</b> code. I thrive on both <b>design and frontend development</b>, optimizing UX for functional and visually appealing products.`;

export function AboutSection() {
    return (
        <section className="flex items-center justify-center flex-col mt-20" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-4xl font-bold">How I do it</h2>
            <Markdown content={aboutMe} className="py-20 md:text-3xl text-lg text-center leading-[1.8]" />
            <a href="/fernando-bertolo-resume.pdf" download="fernando-bertolo-resume.pdf">
                <Button text="Download my resume" />
            </a>
        </section>
    );
}
