import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ArrowUpRightIcon } from '@/components/icons';
import { projects } from '@/data/projects';
import Image from 'next/image';
import inLimboImg from '@/assets/in-limbo-preview.webp';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { ProjectCard, ProjectList } from '@/components/project-list';
import { MobileSectionNav, SectionFocus } from '@/components/section-nav';

export default function Home() {
  return (
    <SectionFocus className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:gap-12 md:px-12 md:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-16 lg:py-0 xl:gap-20 xl:px-20 overflow-x-clip motion-safe:animate-fade-narrow motion-safe:lg:animate-fade-wide">
      <Header />
      <MobileSectionNav />
      <main className="flex min-w-0 flex-col gap-24 md:gap-28 lg:gap-32 lg:py-24">
        <section
          id="about"
          className="scroll-mt-16 space-y-5 leading-relaxed motion-safe:animate-nav-in lg:scroll-mt-24"
        >
          <h2 className="sr-only">About</h2>
          <p className="text-muted text-pretty">
            Hi! I’m Alessandro, a frontend engineer currently working at IBM who
            enjoys the intersection of design, product thinking, and
            engineering. I like shaping how a product looks and works,
            collaborating with others on architectural decisions, and choosing
            the right stack for the job. I care about writing clean,
            well-structured code that’s technically sound and maintainable.
          </p>
          <p className="text-muted text-pretty">
            Before moving into software development, I worked as a documentary
            photographer. Feel free to take a look at{' '}
            <a
              href="https://eurasianet.org/in-limbo-for-a-generation-photos-of-azerbaijans-displaced"
              className="group/preview relative text-strong  underline decoration-muted underline-offset-3 transition-colors hover:text-accent hover:decoration-accent"
            >
              one of my projects
              <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 opacity-0 group-hover/preview:opacity-100 group-focus-visible/preview:opacity-100 mb-2 w-64 motion-safe:transition-opacity">
                <Image
                  src={inLimboImg}
                  alt=""
                  className="h-auto w-full rounded-md border border-border shadow-lg"
                />
              </span>
            </a>
            .
          </p>
          <p className="text-muted text-pretty">
            When offline, I’m usually at the gym, working on my calisthenics.
          </p>
        </section>
        <section id="experience" className="scroll-mt-16 lg:scroll-mt-24">
          <h2 className="sr-only">Experience</h2>

          <ExperienceTimeline />
        </section>
        <div className="flex min-h-[calc(100lvh-7rem)] flex-col gap-10 md:gap-12 lg:min-h-[calc(100lvh-12rem)]">
          <section id="projects" className="scroll-mt-16 lg:scroll-mt-24">
            <h2 className="sr-only">Projects</h2>
            <ProjectList>
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  unavailable={!project.liveUrl}
                  className={`rounded-lg bg-surface p-5 md:p-6 ${project.liveUrl ? 'group relative inset-ring inset-ring-transparent hover:inset-ring-accent/45' : ''}`}
                >
                  <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold text-accent">
                    {project.liveUrl ? (
                      <a
                        className="inline-flex items-center gap-1 after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-accent"
                        href={project.liveUrl}
                      >
                        {project.title}
                        <span className="link-icon">
                          <ArrowUpRightIcon />
                        </span>
                      </a>
                    ) : (
                      <span>{project.title}</span>
                    )}
                    {project.status === 'in-progress' && !project.liveUrl && (
                      <span className="project-status rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted">
                        In progress
                      </span>
                    )}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted text-pretty motion-safe:transition-colors group-hover:text-strong group-focus-within:text-strong">
                    {project.description}
                  </p>
                  {project.status === 'live' && (
                    <p className="mt-2 font-medium text-muted tabular-nums">
                      {project.metric}
                    </p>
                  )}
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full px-3 py-1 text-xs font-medium leading-5 text-muted ring-1 ring-inset ring-muted/30"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </ProjectCard>
              ))}
            </ProjectList>
          </section>
          <Footer />
        </div>
      </main>
    </SectionFocus>
  );
}
