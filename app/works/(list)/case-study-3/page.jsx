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
    {
        image: '/images/covers/cover-23.png',
        title: 'Branding & E-commerce UI/UX',
        subtitle:
            'Created a hardware e-commerce platform. Involved competitive benchmarking, metric analysis, visual identity, wireframing, and interactive prototyping for a robust user experience.',
        handle: ['Branding', 'UI Design', 'UX Design', 'E-commerce'],
        borderColor: '#9646e5', // Púrpura
        gradient: 'linear-gradient(180deg, #9646e5, #000)',
        url: '/works/template'
    },
    // {
    //     image: '/images/covers/cover-16.png',
    //     title: 'Brand & Institutional Web Design',
    //     subtitle:
    //         'Transformed a brand\'s online presence. Started with branding, including moodboard and logo, then developed a comprehensive brand manual and crafted all content for their new institutional website.',
    //     handle: ['Branding', 'Graphic Design', 'Frontend', 'UI Design'],
    //     borderColor: '#10B981', // Verde
    //     gradient: 'linear-gradient(180deg, #10B981, #000)',
    //     url: '/works/template'
    // },
    {
        image: '/images/covers/cover-20.png',
        title: 'Institutional & E-commerce UI/UX',
        subtitle:
            'Led research & design for an institutional site and e-commerce platform. Focused on user experience, from initial investigation to delivering a cohesive and engaging digital presence.',
        handle: ['UX Design', 'UI Design', 'E-commerce', 'Frontend'],
        borderColor: '#EF4444', // Rojo
        gradient: 'linear-gradient(180deg, #EF4444, #000)',
        url: '/works/template'
    }
];

/**
 * @param {{ className?: string }} props
 */
function BrandingCaseStudy({ className }) {
    return (
        <div className={`min-h-screen bg-background text-foreground ${className}`}>
            <section className="relative pb-20">
                <div>
                    <h1 className="mb-8 text-4xl lg:text-6xl tracking-tight md:text-balance">
                        Crafting a Visual Identity from Scratch for a High-Tech Textile Manufacturer
                    </h1>

                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Brand Strategy
                        </span>
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Logo Design
                        </span>
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Brand Guidelines
                        </span>
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Web Design (UI/UX)
                        </span>
                    </div>

                    <p className="text-xl text-muted-foreground mb-8 md:text-balance">
                        Developed a complete visual identity and initial institutional website design for an innovative
                        high-tech textile manufacturing company specializing in fire, electrical, and other protective
                        solutions.
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="rounded-lg bg-zinc-900/80 p-4 border border-zinc-500/40">
                            <h3 className="text-sm font-bold mb-1">Timeline</h3>
                            <p>6 Months</p>
                        </div>
                        <div className="rounded-lg bg-zinc-900/80 p-4 border border-zinc-500/40">
                            <h3 className="text-sm text-muted-foreground mb-1">My Role</h3>
                            <p>Sole Designer & Consultant</p>
                        </div>
                        <div className="rounded-lg bg-zinc-900/80 p-4 border border-zinc-500/40">
                            <h3 className="text-sm text-muted-foreground mb-1">Team</h3>
                            <p>1 (Me) + Client</p>
                        </div>
                        <div className="rounded-lg bg-zinc-900/80 p-4 border border-zinc-500/40">
                            <h3 className="text-sm text-muted-foreground mb-1">Platform</h3>
                            <p>Brand Identity & Web (UI)</p>
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
                                The client, a nascent high-tech textile manufacturing company specializing in protective
                                materials (fire, electricity, etc.), required a complete brand identity from the ground
                                up. The main challenge was to visually represent their innovative and protective nature
                                in a compelling and authoritative way, preparing them for market entry with a strong
                                visual presence.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0 bg-primary-content"></div>
                                    <p>
                                        Establish a distinct and memorable brand identity for a new high-tech B2B
                                        company.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0 bg-primary-content"></div>
                                    <p>
                                        Translate complex product benefits (protection) into clear and impactful visual
                                        language.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0 bg-primary-content"></div>
                                    <p>
                                        Design a foundational institutional website to showcase company information and
                                        capabilities.
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
                    <h2 className="mb-8 text-3xl lg:text-4xl">Research &amp; Conceptualization</h2>

                    <div className="grid lg:grid-cols-3 gap-8 mb-12">
                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40">
                            <h3 className="mb-3">Competitive Analysis & Insights</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Conducted a thorough benchmark of competitors in the high-tech textile and protective
                                equipment sectors. This helped in gathering insights on visual trends and suitable
                                communication tones.
                            </p>
                            <p className="text-2xl text-primary-content font-bold">5+ Competitors Analyzed</p>
                        </Card>

                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40">
                            <h3 className="mb-3">Moodboard & Tonal Exploration</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Created a visual moodboard to explore different aesthetic directions and communication
                                tones, ensuring alignment with the client&apos;s vision for their brand identity.
                            </p>
                            <p className="text-2xl text-primary-content font-bold">3+ Moodboard Iterations</p>
                        </Card>

                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40">
                            <h3 className="mb-3">Direct and constant client collaboration</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Maintained constant, direct communication with the client throughout the entire process,
                                ensuring their input was integrated at every stage of the design and also in the code.
                            </p>
                            <p className="text-2xl text-primary-content font-bold">Continuous Feedback Loop</p>
                        </Card>
                    </div>

                    <div className="bg-primary/10 p-8 rounded-lg border border-primary/40">
                        <h3 className="mb-4 text-xl">Key Strategic Insights</h3>
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div>
                                <h4 className="mb-2 font-semibold">- Authority & Innovation</h4>
                                <p className="text-sm text-muted-foreground">
                                    The brand needed to convey a sense of cutting-edge technology and unwavering
                                    reliability in protection.
                                </p>
                            </div>
                            <div>
                                <h4 className="mb-2 font-semibold">- Clarity & Simplicity</h4>
                                <p className="text-sm text-muted-foreground">
                                    Despite complex technology, the visual communication had to be clear, concise, and
                                    professional.
                                </p>
                            </div>
                            <div>
                                <h4 className="mb-2 font-semibold">- Future-Proof Design</h4>
                                <p className="text-sm text-muted-foreground">
                                    The identity needed to be versatile enough to grow with the company and its future
                                    product lines.
                                </p>
                            </div>
                            <div>
                                <h4 className="mb-2 font-semibold">- Direct Communication</h4>
                                <p className="text-sm text-muted-foreground">
                                    One-on-one client interaction fostered efficient decision-making and project
                                    alignment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up" data-aos-duration="1000" className="py-16">
                <div className="mx-auto">
                    <h2 className="mb-8 text-3xl lg:text-4xl">Design Process & Deliverables</h2>

                    <div className="space-y-12">
                        <div>
                            <h3 className="mb-4 text-xl">Logo Creation & Brand Manual Development</h3>
                            <p className="text-muted-foreground mb-6">
                                Based on the moodboard and client feedback, I designed a distinctive logo that
                                encapsulated the company&apos;s core values of technology and protection. This was
                                followed by the creation of a comprehensive Brand Manual, detailing logo usage, color
                                palettes, typography, imagery guidelines, and overall brand voice.
                            </p>
                            <img
                                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=400&fit=crop"
                                alt="Example of early design concepts and wireframes"
                                className="w-full h-[300px] object-cover rounded-lg"
                            />
                        </div>

                        <div>
                            <h3 className="mb-4 text-xl">Institutional Website UI Design</h3>
                            <p className="text-muted-foreground mb-6">
                                With the brand identity firmly established, I proceeded to design the user interface for
                                the institutional website. This included defining the layout, navigation, and visual
                                elements to present the company&apos;s information effectively, with a clear roadmap for
                                its future development into a live coded site.
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
                    <h2 className="mb-8 text-3xl lg:text-4xl">Results &amp; Impact</h2>

                    <div className="grid lg:grid-cols-3 gap-8 mb-12">
                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40 text-center">
                            <p className="text-4xl text-primary-content mb-2 font-bold">15%</p>
                            <p className="text-sm text-muted-foreground">Increase in Sales Enquiries</p>
                        </Card>

                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40 text-center">
                            <p className="text-4xl text-primary-content mb-2 font-bold">New</p>
                            <p className="text-sm text-muted-foreground">International Markets Reached</p>
                        </Card>

                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40 text-center">
                            <p className="text-4xl text-primary-content mb-2 font-bold">Strong</p>
                            <p className="text-sm text-muted-foreground">Brand Recognition Achieved</p>
                        </Card>
                    </div>

                    <div className="bg-primary/10 p-8 rounded-lg border border-primary/40">
                        <h3 className="mb-4 text-xl">Overall Impact</h3>
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div>
                                <p className="mb-2">
                                    • The newly established professional identity significantly boosted confidence in
                                    sales pitches, leading to a measurable increase in new business inquiries, including
                                    from international markets.
                                </p>
                                <p className="mb-2">
                                    • The cohesive brand elements and a clear digital presence positioned the company as
                                    an authoritative and reliable leader in high-tech textiles.
                                </p>
                            </div>
                            <div>
                                <p className="mb-2">
                                    • This robust visual foundation enabled the client to pursue partnerships and
                                    expansion opportunities previously out of reach.
                                </p>
                                <p className="mb-2">
                                    • The project provided a clear and consistent brand message, essential for scaling
                                    operations and attracting new clients globally.
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
                                    <span className="text-primary-content">•</span> Direct and constant client
                                    communication was vital for aligning vision and expectations.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> The benchmark and moodboard approach
                                    effectively set the communication tone early on.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Delivering a comprehensive brand
                                    manual ensured consistency across all future applications.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> My solo management of the project
                                    allowed for streamlined decision-making and flexibility.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4">What I&apos;d Do Differently</h3>
                            <div className="space-y-3">
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Explore more experimental visual
                                    styles in the initial moodboard phase to push creative boundaries further.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Integrate early user perception
                                    testing for logo concepts, even if informal, to gauge initial reactions.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Proactively suggest and define key
                                    performance indicators (KPIs) for the brand&apos;s launch and website engagement.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Plan for a small-scale, iterative
                                    launch of the website to gather real-world user data quickly.
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
    title: 'Case Study: High-Tech Textile Brand Identity'
};

export default async function Page() {
    return (
        <>
            <BrandingCaseStudy />
            <WorksList items={workItems} haveSkills={false}>
                <h3 className="mt-8 mb-4 text-md">Other projects</h3>
            </WorksList>
            <Footer />
        </>
    );
}
