import { Card } from 'components/card';
import { Footer } from 'components/footer';

/**
 * @param {{ className?: string }} props
 */
function CaseStudy({ className }) {
    return (
        <div className={`min-h-screen bg-background text-foreground ${className}`}>
            <section className="relative pb-20">
                <div>
                    <h1 className="mb-8 text-4xl lg:text-6xl tracking-tight md:text-balance">
                        Redesigning the Financial Dashboard Experience
                    </h1>

                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            UX Research
                        </span>
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Product Design
                        </span>
                        <span className="text-[0.75rem] opacity-80 px-1 rounded-full bg-neutral-50/10 border border-neutral-50/40 w-fit">
                            Prototyping
                        </span>
                    </div>

                    <p className="text-xl text-muted-foreground mb-8 md:text-balance">
                        How we increased user engagement by 40% and reduced task completion time by 60% through
                        user-centered design and iterative testing.
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className='rounded-lg bg-zinc-900/80 p-4 border border-zinc-500/40'>
                            <h3 className="text-sm font-bold mb-1">Timeline</h3>
                            <p>3 months</p>
                        </div>
                        <div className='rounded-lg bg-zinc-900/80 p-4 border border-zinc-500/40'>
                            <h3 className="text-sm text-muted-foreground mb-1">My Role</h3>
                            <p>Lead UX Designer</p>
                        </div>
                        <div className='rounded-lg bg-zinc-900/80 p-4 border border-zinc-500/40'>
                            <h3 className="text-sm text-muted-foreground mb-1">Team</h3>
                            <p>5 people</p>
                        </div>
                        <div className='rounded-lg bg-zinc-900/80 p-4 border border-zinc-500/40'>
                            <h3 className="text-sm text-muted-foreground mb-1">Platform</h3>
                            <p>Web & Mobile</p>
                        </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden bg-muted/50">
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop"
                            alt="Dashboard mockup showing the redesigned interface"
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
                                Our financial dashboard was suffering from poor user engagement and high task
                                abandonment rates. Users were struggling to find critical information and complete
                                essential financial tasks.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0 bg-primary-content"></div>
                                    <p>65% of users abandoned complex financial tasks</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0 bg-primary-content"></div>
                                    <p>Average task completion time was 8 minutes</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0 bg-primary-content"></div>
                                    <p>Low user satisfaction scores (2.1/5)</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                                alt="Analytics showing poor user engagement metrics"
                                className="w-full h-[300px] object-cover rounded-lg"
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
                            <h3 className="mb-3">User Interviews</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Conducted 15 in-depth interviews with existing users to understand pain points and
                                workflow needs.
                            </p>
                            <p className="text-2xl text-primary-content">15 users</p>
                        </Card>

                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40">
                            <h3 className="mb-3">Usability Testing</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Observed users completing key tasks with the existing interface to identify friction
                                points.
                            </p>
                            <p className="text-2xl text-primary-content">8 sessions</p>
                        </Card>

                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40">
                            <h3 className="mb-3">Analytics Review</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Analyzed 6 months of user behavior data to identify drop-off points and usage patterns.
                            </p>
                            <p className="text-2xl text-primary-content">10k users</p>
                        </Card>
                    </div>

                    <div className="bg-primary/10 p-8 rounded-lg border border-primary/40">
                        <h3 className="mb-4 text-xl">Key Research Insights</h3>
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div>
                                <h4 className="mb-2 font-semibold">- Navigation Issues</h4>
                                <p className="text-sm text-muted-foreground">
                                    Users couldn&apos;t find important features buried in submenus and often gave up
                                    searching.
                                </p>
                            </div>
                            <div>
                                <h4 className="mb-2 font-semibold">- Information Overload</h4>
                                <p className="text-sm text-muted-foreground">
                                    The dashboard showed too much data at once, making it difficult to focus on what
                                    matters.
                                </p>
                            </div>
                            <div>
                                <h4 className="mb-2 font-semibold">- Mobile Experience</h4>
                                <p className="text-sm text-muted-foreground">
                                    The mobile interface was essentially unusable for complex financial tasks.
                                </p>
                            </div>
                            <div>
                                <h4 className="mb-2 font-semibold">- Visual Hierarchy</h4>
                                <p className="text-sm text-muted-foreground">
                                    Poor typography and color usage made it hard to scan and prioritize information.
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
                            <h3 className="mb-4 text-xl">Information Architecture</h3>
                            <p className="text-muted-foreground mb-6">
                                We restructured the navigation to follow user mental models and prioritize the most
                                important financial tasks.
                            </p>
                            <img
                                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=400&fit=crop"
                                alt="Information architecture diagram showing the new navigation structure"
                                className="w-full h-[300px] object-cover rounded-lg"
                            />
                        </div>

                        <div>
                            <h3 className="mb-4 text-xl">Wireframing &amp; Prototyping</h3>
                            <p className="text-muted-foreground mb-6">
                                Created low-fi wireframes to test layout concepts, then built interactive prototypes for
                                user testing.
                            </p>
                            <div className="grid lg:grid-cols-2 gap-6">
                                <img
                                    src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop"
                                    alt="Low-fidelity wireframes showing the initial layout concepts"
                                    className="w-full h-[250px] object-cover rounded-lg"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop"
                                    alt="High-fidelity prototype showing the interactive design"
                                    className="w-full h-[250px] object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up" data-aos-duration="1000" className="py-16">
                <div className="mx-auto">
                    <h2 className="mb-8 text-3xl lg:text-4xl">Design Solutions</h2>

                    <div className="space-y-16">
                        <div>
                            <h3 className="mb-4 text-xl">Simplified Dashboard Layout</h3>
                            <p className="text-muted-foreground mb-6">
                                Redesigned the main dashboard to focus on key metrics and provide clear visual
                                hierarchy.
                            </p>
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
                                alt="New dashboard design showing clean, organized layout"
                                className="w-full h-[400px] object-cover rounded-lg"
                            />
                        </div>

                        <div>
                            <h3 className="mb-4 text-xl">Mobile-First Approach</h3>
                            <p className="text-muted-foreground mb-6">
                                Completely rebuilt the mobile experience with touch-optimized interfaces and progressive
                                disclosure.
                            </p>
                            <div className="flex justify-between gap-2 overflow-x-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop"
                                    alt="Mobile interface design showing the new responsive layout"
                                    className="w-[300px] h-[500px] object-cover rounded-lg"
                                />
                                 <img
                                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop"
                                    alt="Mobile interface design showing the new responsive layout"
                                    className="w-[300px] h-[500px] object-cover rounded-lg"
                                />
                                 <img
                                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop"
                                    alt="Mobile interface design showing the new responsive layout"
                                    className="w-[300px] h-[500px] object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4 text-xl">Enhanced Data Visualization</h3>
                            <p className="text-muted-foreground mb-6">
                                Created intuitive charts and graphs that help users understand their financial data at a
                                glance.
                            </p>
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop"
                                alt="Data visualization examples showing charts and graphs"
                                className="w-full h-[300px] object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up" data-aos-duration="1000" className="py-16">
                <div className="mx-auto">
                    <h2 className="mb-8 text-3xl lg:text-4xl">Results &amp; Impact</h2>

                    <div className="grid lg:grid-cols-3 gap-8 mb-12">
                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40 text-center">
                            <p className="text-4xl text-primary-content mb-2 font-bold">40%</p>
                            <p className="text-sm text-muted-foreground">Increase in user engagement</p>
                        </Card>

                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40 text-center">
                            <p className="text-4xl text-primary-content mb-2 font-bold">60%</p>
                            <p className="text-sm text-muted-foreground">Reduction in task completion time</p>
                        </Card>

                        <Card className="p-6 bg-zinc-900/50 border border-neutral-50/40 text-center">
                            <p className="text-4xl text-primary-content mb-2 font-bold">4.3/5</p>
                            <p className="text-sm text-muted-foreground">New user satisfaction score</p>
                        </Card>
                    </div>

                    <div className="bg-primary/10 p-8 rounded-lg border border-primary/40">
                        <h3 className="mb-4 text-xl">Business Impact</h3>
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div>
                                <p className="mb-2">• 25% increase in daily active users</p>
                                <p className="mb-2">• 35% reduction in support tickets</p>
                                <p>• 50% increase in feature adoption</p>
                            </div>
                            <div>
                                <p className="mb-2">• 15% increase in user retention</p>
                                <p className="mb-2">• 30% faster onboarding completion</p>
                                <p>• 20% increase in premium upgrades</p>
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
                                    <span className="text-primary-content">•</span> Early user testing prevented major
                                    redesign later
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Mobile-first approach improved
                                    overall usability
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Progressive disclosure reduced
                                    cognitive load
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Collaborative design process with
                                    stakeholders
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4">What I&apos;d Do Differently</h3>
                            <div className="space-y-3">
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Include more diverse user personas
                                    in research
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Test accessibility features earlier
                                    in the process
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> Better documentation of design
                                    decisions
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary-content">•</span> More frequent stakeholder check-ins
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
    title: 'Case Study: Financial Dashboard Redesign'
};

export default async function Page() {
    return (
        <>
            <CaseStudy />
            <Footer />
        </>
    );
}
