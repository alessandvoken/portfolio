'use client';

import { motion, useInView, useReducedMotion } from 'motion/react';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { useSectionFocus } from '@/components/section-nav';

export function ProjectCard({
  children,
  className,
  unavailable,
}: {
  children: ReactNode;
  className: string;
  unavailable: boolean;
}) {
  const reducedMotion = useReducedMotion();
  const { activeId } = useSectionFocus();
  const cardRef = useRef<HTMLLIElement | null>(null);
  const [previousSection, setPreviousSection] = useState(activeId);
  const [entrance, setEntrance] = useState({
    visible: true,
    duration: 0,
    viewportHeight: 0,
  });
  const inView = useInView(cardRef, {
    margin: `0px 0px ${-entrance.viewportHeight * 0.08}px 0px`,
  });

  // Keep revealed cards visible until About is selected or reached by scrolling.
  if (previousSection !== activeId) {
    setPreviousSection(activeId);
    if (activeId === 'about') {
      setEntrance((current) => ({
        ...current,
        visible: false,
        duration: 0.28,
      }));
    }
  } else if (inView && activeId !== 'about' && !entrance.visible) {
    setEntrance((current) => ({ ...current, visible: true, duration: 0.7 }));
  }

  const ref = useCallback(
    (card: HTMLLIElement | null) => {
      cardRef.current = card;
      if (!card) return;
      setEntrance({
        visible:
          !!reducedMotion ||
          card.getBoundingClientRect().top < window.innerHeight * 0.92,
        duration: 0,
        viewportHeight: window.innerHeight,
      });
    },
    [reducedMotion],
  );

  return (
    <motion.li
      ref={ref}
      className={className}
      data-unavailable={unavailable || undefined}
      data-reveal-state={
        entrance.viewportHeight > 0
          ? entrance.visible
            ? 'visible'
            : 'hidden'
          : undefined
      }
      initial={false}
      animate={reducedMotion || entrance.visible ? 'visible' : 'hidden'}
      variants={{
        hidden: { '--reveal-opacity': 0, y: 48 },
        visible: { '--reveal-opacity': 1, y: 0 },
      }}
      transition={{
        duration: reducedMotion ? 0 : entrance.duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      onFocusCapture={() =>
        setEntrance((current) => ({ ...current, visible: true, duration: 0 }))
      }
    >
      {children}
    </motion.li>
  );
}

export function ProjectList({ children }: { children: ReactNode }) {
  const [navigating, setNavigating] = useState(false);

  // Back from the external site, the bfcache restores the spinner still on.
  useEffect(() => {
    const reset = () => setNavigating(false);
    window.addEventListener('pageshow', reset);
    return () => window.removeEventListener('pageshow', reset);
  }, []);

  // Modified clicks open another tab and leave this page in place.
  const handleClick = (event: MouseEvent) => {
    const sameTab = !(
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    );
    if (sameTab && (event.target as Element).closest('a')) setNavigating(true);
  };

  return (
    <>
      <ul className="project-list grid gap-6 md:gap-12" onClick={handleClick}>
        {children}
      </ul>
      {navigating && (
        <div
          role="status"
          className="fixed inset-0 z-50 grid cursor-progress place-items-center bg-black/50 backdrop-blur-sm motion-safe:animate-fade-narrow"
        >
          <span
            aria-hidden="true"
            className="block size-16 animate-spin rounded-full border-4 border-accent/25 border-t-accent"
          />
          <span className="sr-only">Loading project</span>
        </div>
      )}
    </>
  );
}
