'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import './section-focus.css';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

const linkClassName =
  'inline-block text-sm font-medium uppercase tracking-[0.08em] text-muted decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-strong aria-current:text-strong aria-current:underline';

const SectionFocusContext = createContext<{
  activeId: string;
  selectSection: (id: string) => void;
}>({ activeId: sections[0].id, selectSection: () => {} });

export function SectionFocus({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const scrolledId = useSyncExternalStore(
    subscribe,
    getActiveId,
    () => sections[0].id,
  );
  const [clickedId, setClickedId] = useState<string | null>(null);
  const [isIntroPlaying, setIsIntroPlaying] = useState(true);
  const activeId = clickedId ?? scrolledId;

  useEffect(() => {
    let cancelled = false;
    const animations = document
      .getElementById('experience')
      ?.getAnimations({ subtree: true }) ?? [];

    // Scrolling must not obscure the timeline before its entrance has finished.
    void Promise.allSettled(animations.map((animation) => animation.finished)).then(() => {
      if (!cancelled) setIsIntroPlaying(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // Hold the clicked section while the anchor's smooth scroll passes other sections.
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

  return (
    <SectionFocusContext.Provider
      value={{
        activeId,
        selectSection: setClickedId,
      }}
    >
      <div
        className={`section-focus ${className}`}
        data-focused-section={isIntroPlaying ? undefined : activeId}
      >
        {children}
      </div>
    </SectionFocusContext.Provider>
  );
}

function subscribe(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true });
  window.addEventListener('resize', onChange);
  return () => {
    window.removeEventListener('scroll', onChange);
    window.removeEventListener('resize', onChange);
  };
}

// Compare visible proportions, capped at one viewport so long sections aren't penalized.
function getActiveId() {
  const viewportHeight = window.innerHeight;
  let activeId = sections[0].id;
  let bestVisibility = 0;

  for (const { id } of sections) {
    const section = document.getElementById(id);
    if (section === null) continue;

    const { top, bottom, height } = section.getBoundingClientRect();
    if (height <= 0) continue;

    const visibleHeight = Math.max(
      0,
      Math.min(bottom, viewportHeight) - Math.max(top, 0),
    );
    const visibility = visibleHeight / Math.min(height, viewportHeight);
    if (visibility > bestVisibility) {
      bestVisibility = visibility;
      activeId = id;
    }
  }

  return activeId;
}

export function SectionNav() {
  const { activeId, selectSection } = useContext(SectionFocusContext);

  // Hidden with visibility, not display, so its entrance doesn't replay when the viewport crosses lg
  return (
    <nav
      aria-label="Sections"
      className="mt-16 xl:mt-20 max-lg:invisible max-lg:absolute"
    >
      <ul>
        {sections.map(({ id, label }, index) => (
          <li
            key={id}
            style={{ '--enter-delay': `${200 + index * 150}ms` }}
            className="motion-safe:animate-nav-in"
          >
            <a
              href={`#${id}`}
              aria-current={id === activeId}
              onClick={() => selectSection(id)}
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
  const { activeId, selectSection } = useContext(SectionFocusContext);

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
              onClick={() => selectSection(id)}
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
