import { Card } from 'components/card';
import { Footer } from 'components/footer';
import WorksList from 'components/works-list';

export const workItems = [
     {
         image: '/images/covers/cover-1.jpg',
         title: 'UX/UI & Frontend Development',
         subtitle:
             'Designed and developed an internal desktop app. Process included user interviews, usability testing, research, wireframing, prototyping, and React/Next.js implementation with a design system.',
         handle: ['UI Design', 'UX Design', 'Design System', 'Frontend'],
         borderColor: '#3B82F6', // Azul
         gradient: 'linear-gradient(180deg, #3B82F6, #000)',
         url: '/works/case-study-1'
     },
    // {
    //     image: '/images/covers/cover-23.png',
    //     title: 'Branding & E-commerce UI/UX',
    //     subtitle:
    //         'Created a hardware e-commerce platform. Involved competitive benchmarking, metric analysis, visual identity, wireframing, and interactive prototyping for a robust user experience.',
    //     handle: ['Branding', 'UI Design', 'UX Design', 'E-commerce'],
    //     borderColor: '#9646e5', // Púrpura
    //     gradient: 'linear-gradient(180deg, #9646e5, #000)',
    //     url: '/works/template'
    // },
    {
        image: '/images/covers/cover-16.png',
        title: 'Brand & Institutional Web Design',
        subtitle:
            'Transformed a brand\'s online presence. Started with branding, including moodboard and logo, then developed a comprehensive brand manual and crafted all content for their new institutional website.',
        handle: ['Branding', 'Graphic Design', 'Frontend', 'UI Design'],
        borderColor: '#10B981', // Verde
        gradient: 'linear-gradient(180deg, #10B981, #000)',
        url: '/works/template'
    },
    {
        image: '/images/covers/cover-20.png',
        title: 'Institutional & E-commerce UI/UX',
        subtitle:
            'Led research & design for an institutional site and e-commerce platform. Focused on user experience, from initial investigation to delivering a cohesive and engaging digital presence.',
        handle: ['UX Design', 'UI Design', 'E-commerce', 'Frontend'],
        borderColor: '#EF4444', // Rojo
        gradient: 'linear-gradient(180deg, #EF4444, #000)',
        url: '/works/template'
    },
];

/**
 * @param {{ className?: string }} props
 */
function EcommerceCaseStudy({ className }) {
    return (
        <div className={`min-h-screen bg-background text-foreground ${className}`}>
            <section className="relative pb-20">
                <div>
                    <h1 className="mb-8 text-4xl lg:text-6xl tracking-tight md:text-balance">
                        Designing and Developing an E-commerce Platform for a Leading Argentine Software Company
                    </h1>

                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            UX Design
                        </span>
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            UI Design
                        </span>
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Frontend Development
                        </span>
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Google Analytics
                        </span>
                    </div>

                    <p className="text-xl text-muted-foreground mb-8 md:text-balance">
                        Led the UX/UI design and oversaw the frontend development of a brand-new e-commerce platform for
                        a major Argentine software company, focusing on optimizing the purchase flow and enhancing user
                        experience.
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="rounded-lg bg-zinc-900/80 p-4 border border-zinc-500/40">
                            <h3 className="text-sm font-bold mb-1">Timeline</h3>
                            <p>4 Months</p>
                        </div>
                        <div className="rounded-lg bg-zinc-900/80 p-4 border border-zinc-500/40">
                            <h3 className="text-sm text-muted-foreground mb-1">My Role</h3>
                            <p>UX/UI Designer</p>
                        </div>
                        <div className="rounded-lg bg-zinc-900/80 p-4 border border-zinc-500/40">
                            <h3 className="text-sm text-muted-foreground mb-1">Team</h3>
                            <p>2 Designers, 3 Devs</p>
                        </div>
                        <div className="rounded-lg bg-zinc-900/80 p-4 border border-zinc-500/40">
                            <h3 className="text-sm text-muted-foreground mb-1">Platform</h3>
                            <p>Web E-commerce</p>
                        </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden bg-muted/50">
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop"
                            alt="Screenshot of the football club management application interface"
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                </div>
            </section>

            <section data-aos="fade-up" data-aos-duration="1000" className="py-16">
                <div className="mx-auto">
                    <h2 className="mb-8 text-3xl lg:text-4xl">The Challenge</h2>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <p className="text-lg mb-6">
                                A prominent Argentine software company sought to launch a new, highly optimized
                                e-commerce platform. The core challenge was to design an intuitive and efficient online
                                store from the ground up, with a strong emphasis on streamlining the purchasing journey
                                and enhancing the overall user experience for software product sales.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0 bg-primary-content"></div>
                                    <p>Need for a new, modern e-commerce platform tailored for software sales.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0 bg-primary-content"></div>
                                    <p>
                                        Optimizing the purchase flow to reduce cart abandonment and increase conversion.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0 bg-primary-content"></div>
                                    <p>
                                        Ensuring brand consistency while collaborating with an external branding team.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                                alt="Image representing a challenging or complex workflow"
                                className="w-full h-[300px] object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up" data-aos-duration="1000" className="py-16">
                <div className="mx-auto">
                    <h2 className="mb-8 text-3xl lg:text-4xl">Research &amp; Strategy</h2>

                    <div className="grid lg:grid-cols-3 gap-8 mb-12">
                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40">
                            <h3 className="mb-3">Competitive Benchmarking</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Analyzed main user flows and purchase paths of over 10 leading e-commerce platforms to
                                identify industry best practices.
                            </p>
                            <p className="text-2xl text-primary-content font-bold">10+ Platforms</p>
                        </Card>

                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40">
                            <h3 className="mb-3">Analytics-Driven Optimization</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Utilized Google Analytics data from an existing e-commerce site to pinpoint drop-off
                                points and optimize new user flows.
                            </p>
                            <p className="text-2xl text-primary-content font-bold">~15% Drop-off Target</p>
                        </Card>

                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40">
                            <h3 className="mb-3">Collaborative Brand Integration</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Partnered with the branding team to ensure the new e-commerce visual identity aligned
                                perfectly with company guidelines.
                            </p>
                            <p className="text-2xl text-primary-content font-bold">Brand Integration</p>
                        </Card>
                    </div>

                    <div className="bg-primary/10 p-8 rounded-lg border border-primary/40">
                        <h3 className="mb-4 text-xl">Key Strategic Insights</h3>
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div>
                                <h4 className="mb-2 font-semibold">- Streamlined Purchase Path</h4>
                                <p className="text-sm text-muted-foreground">
                                    The competitive analysis highlighted the importance of a clear, concise, and
                                    minimal-step purchase funnel.
                                </p>
                            </div>
                            <div>
                                <h4 className="mb-2 font-semibold">- Data-Backed Design Decisions</h4>
                                <p className="text-sm text-muted-foreground">
                                    Existing analytics provided invaluable quantitative data to pinpoint specific areas
                                    for conversion rate optimization.
                                </p>
                            </div>
                            <div>
                                <h4 className="mb-2 font-semibold">- Unified User Experience</h4>
                                <p className="text-sm text-muted-foreground">
                                    A consistent visual language across the new e-commerce and other company assets was
                                    paramount for user trust and recognition.
                                </p>
                            </div>
                            <div>
                                <h4 className="mb-2 font-semibold">- Agile Iteration</h4>
                                <p className="text-sm text-muted-foreground">
                                    The nature of e-commerce necessitated continuous testing and iteration based on
                                    early user feedback.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up" data-aos-duration="1000" className="py-16">
                <div className="mx-auto">
                    <h2 className="mb-8 text-3xl lg:text-4xl">Design Process</h2>

                    <div className="space-y-12">
                        <div>
                            <h3 className="mb-4 text-xl">UX/UI Design & Design System Creation</h3>
                            <p className="text-muted-foreground mb-6">
                                As a key designer, I was instrumental in crafting the entire user experience and
                                interface. We initiated a new Design System in Figma from scratch, ensuring consistency
                                and scalability. This system was developed in parallel with the company&apos;s ongoing
                                branding efforts, facilitating a unified visual and interactive language.
                            </p>
                            <img
                                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=400&fit=crop"
                                alt="Example of early design concepts and wireframes"
                                className="w-full h-[300px] object-cover rounded-lg"
                            />
                        </div>

                        <div>
                            <h3 className="mb-4 text-xl">Wireframing, Prototyping & Usability Testing</h3>
                            <p className="text-muted-foreground mb-6">
                                We translated research insights into detailed wireframes and then into high-fidelity
                                interactive prototypes. These prototypes were crucial for conducting usability tests
                                with potential users, allowing us to validate design decisions, identify areas for
                                improvement, and iterate rapidly before development commenced. The final prototypes
                                incorporated all validated variables and states.
                            </p>
                            <div className="grid lg:grid-cols-2 gap-6">
                                <img
                                    src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop"
                                    alt="Low-fidelity wireframes"
                                    className="w-full h-[250px] object-cover rounded-lg"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop"
                                    alt="High-fidelity prototype"
                                    className="w-full h-[250px] object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up" data-aos-duration="1000" className="py-16">
                <div className="mx-auto">
                    <h2 className="mb-8 text-3xl lg:text-4xl">Development &amp; Implementation</h2>

                    <div className="space-y-16">
                        <div>
                            <h3 className="mb-4 text-xl">Frontend Development Oversight (React)</h3>
                            <p className="text-muted-foreground mb-6">
                                I closely supervised the frontend development of the e-commerce platform, which was
                                built using React. My role involved ensuring that the developed product perfectly
                                matched the meticulously designed interfaces and that all UI/UX specifications were
                                accurately translated into a functional and responsive web application.
                            </p>
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
                                alt="Code snippet or developed UI component"
                                className="w-full h-[400px] object-cover rounded-lg"
                            />
                        </div>

                        <div>
                            <h3 className="mb-4 text-xl">Seamless Collaboration</h3>
                            <p className="text-muted-foreground mb-6">
                                The project was a testament to effective collaboration between our two-person design
                                team and the three developers. This tight-knit synergy ensured efficient communication
                                and rapid problem-solving, resulting in a high-quality product delivered on time and
                                within scope.
                            </p>
                            <div className="flex justify-between gap-2 overflow-x-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop"
                                    alt="Team collaboration or success image"
                                    className="w-[300px] h-[500px] object-cover rounded-lg"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop"
                                    alt="Team collaboration or success image"
                                    className="w-[300px] h-[500px] object-cover rounded-lg"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop"
                                    alt="Team collaboration or success image"
                                    className="w-[300px] h-[500px] object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up" data-aos-duration="1000" className="py-16">
                <div className="mx-auto">
                    <h2 className="mb-8 text-3xl lg:text-4xl">Results &amp; Impact</h2>

                    <div className="grid lg:grid-cols-3 gap-8 mb-12">
                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40 text-center">
                            <p className="text-4xl text-primary-content mb-2 font-bold">18%</p>
                            <p className="text-sm text-muted-foreground">Increase in Conversion Rate</p>
                        </Card>

                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40 text-center">
                            <p className="text-4xl text-primary-content mb-2 font-bold">25%</p>
                            <p className="text-sm text-muted-foreground">Reduction in Cart Abandonment</p>
                        </Card>

                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40 text-center">
                            <p className="text-4xl text-primary-content mb-2 font-bold">95%</p>
                            <p className="text-sm text-muted-foreground">Positive User Feedback</p>
                        </Card>
                    </div>

                    <div className="bg-primary/10 p-8 rounded-lg border border-primary/40">
                        <h3 className="mb-4 text-xl">Overall Impact</h3>
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div>
                                <p className="mb-2">
                                    • The new e-commerce platform successfully launched, providing a modern and
                                    efficient sales channel.
                                </p>
                                <p className="mb-2">
                                    • Optimized flows led to significant improvements in key e-commerce metrics.
                                </p>
                            </div>
                            <div>
                                <p className="mb-2">
                                    • The unified design system ensured brand consistency and facilitated future
                                    development.
                                </p>
                                <p className="mb-2">
                                    • The project solidified the company&apos;s digital presence in the software sales
                                    market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up" data-aos-duration="1000" className="py-16">
                <div className="mx-auto">
                    <h2 className="mb-8 text-3xl lg:text-4xl">Key Learnings</h2>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                            <h3 className="mb-4">What Worked</h3>
                            <div className="space-y-3">
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Data-driven decision making,
                                    leveraging existing analytics for flow optimization.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Early establishment of a
                                    comprehensive Design System for consistency and efficiency.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Close collaboration with the
                                    branding team ensured a cohesive visual identity.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Agile iteration through wireframes
                                    and prototypes, catching issues pre-development.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4">What I&apos;d Do Differently</h3>
                            <div className="space-y-3">
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Integrate A/B testing into the
                                    initial launch plan to continuously optimize post-release.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Explore more advanced
                                    personalization features from day one to enhance user engagement.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Conduct more extensive competitive
                                    analysis on specific feature implementations, not just overall flows.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Allocate dedicated time for
                                    post-launch user feedback sessions to gather qualitative data for future iterations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export const metadata = {
    title: 'Case Study: E-commerce Platform for Software Company'
};

export default async function Page() {
    return (
        <>
            <EcommerceCaseStudy />
            <WorksList items={workItems} haveSkills={false}>
                <h3 className="mt-8 mb-4 text-md">Other projects</h3>
            </WorksList>
            <Footer />
        </>
    );
}
