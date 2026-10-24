'use client';

import { motion, useInView, useReducedMotion } from 'motion/react';
import { useCallback, useRef, useState, type ReactNode } from 'react';
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
      setEntrance((current) => ({ ...current, visible: false, duration: 0.28 }));
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
      data-reveal-state={entrance.viewportHeight > 0 ? (entrance.visible ? 'visible' : 'hidden') : undefined}
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
  return (
    <ul className="project-list grid gap-6 md:gap-12">
      {children}
    </ul>
  );
}
