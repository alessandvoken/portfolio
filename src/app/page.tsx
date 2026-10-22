import { IconLink } from '@/components/icon-link';
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/icons';
import { projects } from '@/data/projects';
import Image from 'next/image';
import inLimboImg from '@/assets/in-limbo-preview.webp';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { MobileSectionNav, SectionNav } from '@/components/section-nav';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-12 md:py-20 grid gap-16 lg:gap-12 lg:grid-cols-2 lg:py-0 overflow-x-clip motion-safe:animate-fade-narrow motion-safe:lg:animate-fade-wide">
      <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-balance motion-safe:animate-nav-in">
            Alessandro Perchiazzi
          </h1>
          <p className="mt-2 text-xl font-medium motion-safe:animate-nav-in">
            Frontend engineer
          </p>
          <SectionNav />
        </div>
        <ul className="mt-8 flex items-center gap-4 motion-safe:animate-nav-in">
          <li>
            <IconLink href="https://github.com/alessandvoken" label="GitHub">
              <GitHubIcon />
            </IconLink>
          </li>
          <li>
            <IconLink
              href="https://www.linkedin.com/in/alessandro-perchiazzi"
              label="LinkedIn"
            >
              <LinkedInIcon />
            </IconLink>
          </li>
          <li>
            <IconLink
              href="mailto:alessandro.perchiazzi598@gmail.com"
              label="Email"
            >
              <MailIcon />
            </IconLink>
          </li>
        </ul>
      </header>
      <MobileSectionNav />
      <main className="lg:py-24">
        <section
          id="about"
          className="mb-24 scroll-mt-16 space-y-4 motion-safe:animate-nav-in lg:scroll-mt-24"
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
              className="group/preview relative text-strong underline decoration-muted underline-offset-3 transition-colors hover:text-accent hover:decoration-accent"
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
        <section
          id="experience"
          className="mb-24 scroll-mt-16 space-y-4 lg:scroll-mt-24"
        >
          <h2 className="sr-only">Experience</h2>

          <ExperienceTimeline />

          <a
            href="/Alessandro_Perchiazzi_Frontend_Engineer_CV.pdf"
            target="_blank"
            className="group/cv mt-12 inline-flex items-center gap-1 font-semibold transition-colors hover:text-accent motion-safe:animate-nav-in [--enter-delay:3750ms]"
          >
            View Full Résumé
            <span className="sr-only"> (PDF, opens in a new tab)</span>
            <span className="inline-block motion-safe:transition-transform motion-safe:group-hover/cv:-translate-y-0.5 motion-safe:group-hover/cv:translate-x-0.5">
              <ArrowUpRightIcon />
            </span>
          </a>
        </section>
        <section
          id="projects"
          className="mb-24 min-h-[calc(100lvh-13rem)] scroll-mt-16 space-y-4 md:min-h-[calc(100lvh-15rem)] lg:min-h-[calc(100lvh-18rem)] lg:scroll-mt-24"
        >
          <h2 className="sr-only">Projects</h2>
          <ul className="space-y-18">
            {projects.map((project) => (
              <li
                key={project.title}
                className={`rounded-lg bg-surface p-4 ${project.liveUrl ? 'group relative inset-ring inset-ring-transparent transition-shadow hover:inset-ring-accent/45' : ''}`}
              >
                <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold">
                  {project.liveUrl ? (
                    <a
                      className="inline-flex items-center gap-1 transition-colors group-hover:text-accent after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-accent"
                      href={project.liveUrl}
                    >
                      {project.title}
                      <span className="inline-block motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5">
                        <ArrowUpRightIcon />
                      </span>
                    </a>
                  ) : (
                    project.title
                  )}
                  {project.status === 'in-progress' && (
                    <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted">
                      In progress
                    </span>
                  )}
                </h3>
                <p className="mt-4 text-muted text-pretty transition-colors group-hover:text-strong">
                  {project.description}
                </p>
                {project.status === 'live' && (
                  <p className="mt-2 font-medium text-muted tabular-nums transition-colors group-hover:text-strong">
                    {project.metric}
                  </p>
                )}
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
