import { IconLink } from '@/components/icon-link';
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/icons';
import { SectionNav } from '@/components/section-nav';

export function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-6xl lg:text-6xl font-medium tracking-[-0.02em] text-balance motion-safe:animate-nav-in">
          Alessandro Perchiazzi
        </h1>
        <p className="mt-2 text-xl motion-safe:animate-nav-in">
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
  );
}
