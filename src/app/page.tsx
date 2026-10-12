import { IconLink } from '@/components/icon-link';
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/icons';
import { projects } from '@/data/projects';
import Image from 'next/image';

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
            I build interfaces for the moment things go wrong
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
          <p className="text-muted text-pretty">
            ABOUT: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolores fuga quos porro quaerat, nobis id nesciunt ut cum odit
            accusamus accusantium iure illum ducimus inventore possimus quas!
            Beatae, exercitationem quasi.
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
                <p className="mt-4 text-muted text-pretty transition-colors group-hover:text-strong">
                  {project.description}
                </p>
                <p className="mt-2 font-medium text-muted tabular-nums transition-colors group-hover:text-strong">
                  {project.metric}
                </p>
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
