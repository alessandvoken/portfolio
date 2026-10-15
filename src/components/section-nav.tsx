'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

const linkClassName =
  'inline-block text-sm font-medium uppercase tracking-[0.08em] text-muted decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-strong aria-current:text-strong aria-current:underline';

function subscribe(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true });
  window.addEventListener('resize', onChange);
  return () => {
    window.removeEventListener('scroll', onChange);
    window.removeEventListener('resize', onChange);
  };
}

// The active section is the last one whose top has crossed the upper third of the viewport.
function getActiveId() {
  const line = window.innerHeight / 3;
  const active = sections.findLast(({ id }) => {
    const section = document.getElementById(id);
    return section !== null && section.getBoundingClientRect().top <= line;
  });
  return (active ?? sections[0]).id;
}

function useActiveSection() {
  const scrolledId = useSyncExternalStore(
    subscribe,
    getActiveId,
    () => sections[0].id,
  );
  const [clickedId, setClickedId] = useState<string | null>(null);

  // Hold the clicked section until the smooth scroll settles, so the ones it passes don't appear active
  useEffect(() => {
    if (clickedId === null) return;
    const release = () => setClickedId(null);
    let timer = setTimeout(release, 150);
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(release, 150);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [clickedId]);

  return [clickedId ?? scrolledId, setClickedId] as const;
}

export function SectionNav() {
  const [activeId, setClickedId] = useActiveSection();

  // Hidden with visibility, not display, so its entrance doesn't replay when the viewport crosses lg
  return (
    <nav
      aria-label="Sections"
      className="mt-66 max-lg:invisible max-lg:absolute"
    >
      <ul>
        {sections.map(({ id, label }, index) => (
          <li
            key={id}
            style={{ '--enter-delay': `${3900 + index * 150}ms` }}
            className="motion-safe:animate-nav-in"
          >
            <a
              href={`#${id}`}
              aria-current={id === activeId}
              onClick={() => setClickedId(id)}
              className={`py-2 ${linkClassName}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function MobileSectionNav() {
  const [activeId, setClickedId] = useActiveSection();

  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-10 -mx-6 bg-bg/80 px-6 backdrop-blur-sm md:-mx-12 md:px-12 lg:hidden"
    >
      <ul className="flex gap-6 motion-safe:animate-nav-in">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={id === activeId}
              onClick={() => setClickedId(id)}
              className={`py-3 ${linkClassName}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
