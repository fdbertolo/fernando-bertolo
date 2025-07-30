import { Card } from 'components/card';
import { Footer } from 'components/footer';
import WorksList from 'components/works-list';

export const workItems = [
    // {
    //     image: '/images/covers/cover-1.jpg',
    //     title: 'UX/UI & Frontend Development',
    //     subtitle:
    //         'Designed and developed an internal desktop app. Process included user interviews, usability testing, research, wireframing, prototyping, and React/Next.js implementation with a design system.',
    //     handle: ['UI Design', 'UX Design', 'Design System', 'Frontend'],
    //     borderColor: '#3B82F6', // Azul
    //     gradient: 'linear-gradient(180deg, #3B82F6, #000)',
    //     url: '/works/case-study-1'
    // },
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
function CaseStudy({ className }) {
    return (
        <div className={`min-h-screen bg-background text-foreground ${className}`}>
            <section className="relative pb-20">
                <div>
                    <h1 className="mb-8 text-4xl lg:text-6xl md:text-balance">
                        Designing and Developing a Management Application for a Major Football Club
                    </h1>

                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            UX Research
                        </span>
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Product Design
                        </span>
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Frontend Development
                        </span>
                    </div>

                    <p className="text-xl text-muted-foreground mb-8 md:text-balance">
                        From initial design to a fully functional application, we empowered a major football club&apos;s
                        daily operations through a robust and intuitive platform, fostering efficiency across diverse
                        departments.
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="rounded-lg bg-zinc-900/80 p-4 border border-zinc-500/40">
                            <h3 className="text-sm font-bold mb-1">Timeline</h3>
                            <p>12 Months</p>
                        </div>
                        <div className="rounded-lg bg-zinc-900/80 p-4 border border-zinc-500/40">
                            <h3 className="text-sm text-muted-foreground mb-1">My Role</h3>
                            <p>UX/UI Design & Frontend</p>
                        </div>
                        <div className="rounded-lg bg-zinc-900/80 p-4 border border-zinc-500/40">
                            <h3 className="text-sm text-muted-foreground mb-1">Team</h3>
                            <p>7 members</p>
                        </div>
                        <div className="rounded-lg bg-zinc-900/80 p-4 border border-zinc-500/40">
                            <h3 className="text-sm text-muted-foreground mb-1">Platform</h3>
                            <p>Web Application</p>
                        </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden bg-muted/50">
                        <img
                            src="../images/projects/club1.jpg"
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
                                A major football club needed a comprehensive digital solution to streamline their
                                internal operations. The goal was to create a new application from scratch that would
                                enhance efficiency for various departments and improve their day-to-day work.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0 bg-primary-content"></div>
                                    <p>
                                        Lack of a centralized management system for diverse departments (doctors,
                                        coaches, nutritionists, scouts, etc.).
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0 bg-primary-content"></div>
                                    <p>Inefficient workflows due to manual processes and disparate tools.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0 bg-primary-content"></div>
                                    <p>
                                        Need for a user-friendly, high-quality interface to support critical club
                                        functions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="../images/work3.png"
                                alt="Image representing a challenging or complex workflow"
                                className="w-full h-[500px] object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up" data-aos-duration="1000" className="py-16">
                <div className="mx-auto">
                    <h2 className="mb-8 text-3xl lg:text-4xl">Research &amp; Discovery</h2>

                    <div className="grid lg:grid-cols-3 gap-8 mb-12">
                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40">
                            <h3 className="mb-3">User Interviews &amp; Stakeholder Analysis</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Conducted in-depth interviews across 8 distinct club areas, engaging both department
                                directors and their teams. This provided a comprehensive understanding of diverse
                                workflows and pain points.
                            </p>
                            <p className="text-2xl text-primary-content font-bold">24 Different Roles</p>
                        </Card>

                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40">
                            <h3 className="mb-3">Usability Testing & Iterative Feedback</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Observed users completing key tasks with existing processes and early prototypes across
                                8 extensive testing sessions to identify friction points and continuously refine the
                                user experience.
                            </p>
                            <p className="text-2xl text-primary-content font-bold">8 Testing Sessions</p>
                        </Card>

                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40">
                            <h3 className="mb-3">Process Unification & Data Centralization</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Realized each area operated with disparate methods. Our objective became to unify these
                                distinct processes to feed a single, comprehensive database with all player and
                                operational analytics.
                            </p>
                            <p className="text-2xl text-primary-content font-bold">1 Source of Truth</p>
                        </Card>
                    </div>

                    <div className="bg-primary/10 p-8 rounded-lg border border-primary/40">
                        <h3 className="mb-4 text-xl">Key Research Insights</h3>
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div>
                                <h4 className="mb-2 font-semibold">- Diverse User Needs</h4>
                                <p className="text-sm text-muted-foreground">
                                    Each department had highly specific requirements, necessitating a flexible and
                                    customizable application capable of handling a wide range of tasks.
                                </p>
                            </div>
                            <div>
                                <h4 className="mb-2 font-semibold">- Usability and Efficiency</h4>
                                <p className="text-sm text-muted-foreground">
                                    The new system had to be intuitive and significantly reduce the time spent on
                                    administrative and data management tasks.
                                </p>
                            </div>
                            <div>
                                <h4 className="mb-2 font-semibold">- Visual Appeal</h4>
                                <p className="text-sm text-muted-foreground">
                                    A professional and well-cared-for aesthetic was crucial for user adoption and
                                    reinforcing the club&apos;s brand identity.
                                </p>
                            </div>
                            <div>
                                <h4 className="mb-2 font-semibold">- Data Centralization</h4>
                                <p className="text-sm text-muted-foreground">
                                    The project needed to create a single source of truth for all data, from player
                                    stats to medical records, accessible to authorized personnel.
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
                            <h3 className="mb-4 text-xl">Conceptualization &amp; Interface Design</h3>
                            <p className="text-muted-foreground mb-6">
                                I began the design process from a blank canvas, translating the complex needs gathered
                                from each department into a cohesive and intuitive user experience. This involved
                                crafting initial design concepts and iterating on them directly with the end-users to
                                ensure we were building a product that truly addressed their daily pain points.
                            </p>
                            <img
                                src="../images/club1.png"
                                alt="Example of early design concepts and wireframes"
                                className="w-full h-[300px] object-cover rounded-lg"
                            />
                        </div>

                        <div>
                            <h3 className="mb-4 text-xl">Wireframing &amp; Prototyping</h3>
                            <p className="text-muted-foreground mb-6">
                                The insights from our interviews were refined into low-fidelity wireframes to quickly
                                test layout concepts. From there, I built high-fidelity interactive prototypes that
                                allowed us to visualize the application&apos;s flow and conduct usability tests with the
                                team members before any code was written. This step was critical for catching design
                                flaws early and ensuring a smooth development phase.
                            </p>
                            <div className="grid lg:grid-cols-2 gap-6">
                                <img
                                    src="../images/club3.png"
                                    alt="Low-fidelity wireframes"
                                    className="w-full h-[250px] object-cover rounded-lg"
                                />
                                <img
                                    src="../images/club2.png"
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
                    <h2 className="mb-8 text-3xl lg:text-4xl">Development &amp; Aesthetic Implementation</h2>

                    <div className="space-y-16">
                        <div>
                            <h3 className="mb-4 text-xl">Frontend Development Excellence</h3>
                            <p className="text-muted-foreground mb-6">
                                I played a key role in the aesthetic implementation of the site from the development
                                side, specifically in the frontend. By paying great attention to every detail, I ensured
                                the final product not only functioned flawlessly but also had a highly professional and
                                polished look, which was a significant factor in user satisfaction.
                            </p>
                            <img
                                src="../images/club4.png"
                                alt="Code snippet or developed UI component"
                                className="w-full h-[460px] object-cover rounded-lg"
                            />
                        </div>

                        <div>
                            <h3 className="mb-4 text-xl">Collaborative Synergy</h3>
                            <p className="text-muted-foreground mb-6">
                                The project&apos;s success was a testament to the amazing synergy within our team. We
                                were able to create something completely new from the ground up, and my contributions in
                                both design and development were fundamental in assisting the team and ensuring we
                                delivered a high-quality product that exceeded the client&apos;s expectations.
                            </p>
                            <div className="flex justify-between gap-2 overflow-x-auto">
                                <img
                                    src="../images/club5.png"
                                    alt="Team collaboration or success image"
                                    className="w-[320px] h-[400px] object-cover rounded-lg"
                                />
                                <img
                                    src="../images/club6.png"
                                    alt="Team collaboration or success image"
                                    className="w-[320px] h-[400px] object-cover rounded-lg"
                                />
                                <img
                                    src="../images/club7.png"
                                    alt="Team collaboration or success image"
                                    className="w-[320px] h-[400px] object-cover rounded-lg"
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
                            <p className="text-4xl text-primary-content mb-2 font-bold">100%</p>
                            <p className="text-sm text-muted-foreground">Internal Adoption Rate</p>
                        </Card>

                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40 text-center">
                            <p className="text-4xl text-primary-content mb-2 font-bold">40%</p>
                            <p className="text-sm text-muted-foreground">Increase in Daily Efficiency</p>
                        </Card>

                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40 text-center">
                            <p className="text-4xl text-primary-content mb-2 font-bold">4.8/5</p>
                            <p className="text-sm text-muted-foreground">User Satisfaction Score</p>
                        </Card>
                    </div>

                    <div className="bg-primary/10 p-8 rounded-lg border border-primary/40">
                        <h3 className="mb-4 text-xl">Overall Impact</h3>
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div>
                                <p className="mb-2">
                                    • The application is now an integral part of the daily workflow for a wide range of
                                    club personnel.
                                </p>
                                <p className="mb-2">
                                    • We delivered a superior, professional product that surpassed the client&apos;s
                                    initial vision within the tight deadline.
                                </p>
                            </div>
                            <div>
                                <p className="mb-2">
                                    • The client expressed high satisfaction and a strong desire to continue
                                    collaborating with our team for future feature additions.
                                </p>
                                <p className="mb-2">
                                    • Our combined efforts resulted in a highly professional and polished application
                                    that set a new standard for their internal systems.
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
                                    <span className="text-primary-content">•</span> Starting from scratch with in-depth
                                    interviews allowed for a perfectly tailored solution.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> The iterative design process with
                                    constant user feedback was key to creating an optimal product.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> My dual role in design and
                                    development was a fundamental piece of the puzzle, providing clarity and quick
                                    solutions.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> A highly collaborative and motivated
                                    team was essential for delivering a superior product on time.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4">What I&apos;d Do Differently</h3>
                            <div className="space-y-3">
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> I would establish quantitative
                                    metrics for success tracking from the project&apos;s inception to better measure
                                    impact.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> I would formalize a design system
                                    and component library earlier in the process to enhance long-term scalability and
                                    consistency.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> I would push for more frequent,
                                    scheduled check-ins with stakeholders to ensure alignment on every small decision,
                                    not just major milestones.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> I would have dedicated more time to
                                    documenting the design rationale behind key decisions to aid future team members.
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
    title: 'Case Study: Football Club Management Application'
};

export default async function Page() {
    return (
        <>
            <CaseStudy />
            <WorksList items={workItems} haveSkills={false}>
                <h3 className='mt-8 mb-4 text-md'>Other projects</h3>
            </WorksList>
            <Footer />
        </>
    );
}
