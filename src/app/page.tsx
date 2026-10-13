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

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 py-12 md:py-20 grid gap-16 lg:grid-cols-2 lg:py-0 overflow-x-clip motion-safe:animate-fade-narrow motion-safe:lg:animate-fade-wide">
      <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-24 motion-safe:animate-from-top">
        <div>
          <h1 className="text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-balance">
            Alessandro Perchiazzi
          </h1>
          <p className="mt-2 text-xl font-medium">Frontend developer</p>
          <p className="mt-4 max-w-xs text-muted text-pretty">
            I build functional, accessible web interfaces.
          </p>
          <nav
            aria-label="Sections"
            className="mt-16 hidden lg:block motion-safe:transition-opacity motion-safe:duration-300 motion-safe:starting:opacity-0"
          >
            <ul>
              <li className="motion-safe:animate-nav-in [--enter-delay:600ms]">
                <a
                  href="#about"
                  className="inline-block py-2 text-xs font-medium uppercase tracking-[0.08em] text-muted hover:text-strong"
                >
                  About
                </a>
              </li>
              <li className="motion-safe:animate-nav-in [--enter-delay:750ms]">
                <a
                  href="#projects"
                  className="inline-block py-2 text-xs font-medium uppercase tracking-[0.08em] text-muted hover:text-strong"
                >
                  Projects
                </a>
              </li>
              <li className="motion-safe:animate-nav-in [--enter-delay:900ms]">
                <a
                  href="#experience"
                  className="inline-block py-2 text-xs font-medium uppercase tracking-[0.08em] text-muted hover:text-strong"
                >
                  Experience
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="mt-8 flex items-center gap-4">
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
      <main className="lg:py-24 motion-safe:animate-from-right">
        <section
          id="about"
          className="mb-24 space-y-4 motion-safe:enter-on-scroll"
        >
          <h2 className="text-xl font-semibold lg:sr-only">About</h2>
          <p className="text-justify text-muted text-pretty">
            Hi! I'm Alessandro, a frontend engineer currently working at IBM who
            enjoys the intersection of design, product thinking, and
            engineering. I like shaping how a product looks and works, thinking
            through its architecture, and choosing the right stack for the job.
            I care about writing clean, well-structured code that's technically
            sound and maintainable.
          </p>
          <p className="text-justify text-muted text-pretty">
            Before getting into code, I worked as a documentary photographer.
            Feel free to take a look at{' '}
            <a
              href="https://eurasianet.org/in-limbo-for-a-generation-photos-of-azerbaijans-displaced"
              className="group/preview relative text-strong underline decoration-muted underline-offset-3 transition-colors hover:text-accent hover:decoration-accent
"
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
          <p className=" text-justify text-muted text-pretty">
            When offline, I'm usually at the gym, working on my calisthenics.
          </p>
        </section>
        <section id="projects" className="mb-24 space-y-4">
          <h2 className="text-xl font-semibold lg:sr-only">Projects</h2>
          <ul>
            {projects.map((project) => (
              <li
                key={project.title}
                className="group relative -mx-4 rounded-lg p-4 transition-colors hover:bg-surface motion-safe:enter-on-scroll"
              >
                <h3 className="font-semibold">
                  <a
                    className="inline-flex items-center gap-1 transition-colors group-hover:text-accent after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-accent"
                    href={project.liveUrl}
                  >
                    {project.title}
                    <span className="inline-block motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5">
                      <ArrowUpRightIcon />
                    </span>
                  </a>
                </h3>
                <Image
                  src={project.screenshot}
                  alt=""
                  unoptimized
                  loading="eager"
                  className="mt-3 h-auto w-full rounded-md border border-border"
                />
                <p className="text-justify mt-4 text-muted text-pretty transition-colors group-hover:text-strong">
                  {project.description}
                </p>
                <p className="mt-2 font-medium text-muted tabular-nums transition-colors group-hover:text-strong">
                  {project.metric}
                </p>
                <ul className=" mt-3 flex flex-wrap gap-2">
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
        <section
          id="experience"
          className="mb-24 space-y-4 motion-safe:enter-on-scroll"
        >
          <h2 className="text-xl font-semibold lg:sr-only">Experience</h2>
        </section>
      </main>
    </div>
  );
}
