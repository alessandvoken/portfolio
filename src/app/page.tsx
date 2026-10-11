import { IconLink } from '@/components/icon-link';
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/icons';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 py-12 md:py-20 lg:grid lg:grid-cols-2 lg:gap-16 lg:py-0">
      <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-balance">
            Alessandro Perchiazzi
          </h1>
          <p className="mt-2 text-xl font-medium">Frontend developer</p>
          <p className="mt-4 max-w-xs text-muted text-pretty">
            I build interfaces for the moment things go wrong
          </p>
          <nav aria-label="Sections" className="mt-16 hidden lg:block">
            <ul>
              <li>
                <a
                  href="#about"
                  className="inline-block py-2 text-xs font-medium uppercase tracking-[0.08em] text-muted hover:text-strong"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="inline-block py-2 text-xs font-medium uppercase tracking-[0.08em] text-muted hover:text-strong"
                >
                  Projects
                </a>
              </li>
              <li>
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
            <IconLink href="https://www.linkedin.com/in/alessandro-perchiazzi" label="LinkedIn">
              <LinkedInIcon />
            </IconLink>
          </li>
          <li>
            <IconLink href="mailto:alessandro.perchiazzi598@gmail.com" label="Email">
              <MailIcon />
            </IconLink>
          </li>
        </ul>
      </header>
      <main className="lg:py-24"></main>
    </div>
  );
}
