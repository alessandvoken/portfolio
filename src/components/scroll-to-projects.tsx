'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

export function ScrollToProjects({
  visible,
  onNavigate,
}: {
  visible: boolean | null;
  onNavigate: () => void;
}) {
  const reducedMotion = useReducedMotion();
  const [introFinished, setIntroFinished] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  if (visible === false && !dismissed) {
    setDismissed(true);
  }

  useEffect(() => {
    let cancelled = false;
    const animations =
      document.querySelector('#experience')?.getAnimations({ subtree: true }) ??
      [];
    void Promise.allSettled(
      animations.map((animation) => animation.finished),
    ).then(() => {
      if (!cancelled) setIntroFinished(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const show = visible === true && introFinished && !dismissed;

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 bottom-22 z-20 mx-auto grid max-w-7xl px-6 md:px-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:px-16 xl:gap-20 xl:px-20"
      aria-hidden={!show}
      inert={!show}
      initial={false}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.1, ease: 'easeOut' }}
    >
      <a
        href="#projects"
        aria-label="Scroll to projects"
        onClick={onNavigate}
        className="pointer-events-auto justify-self-center rounded-full bg-bg/90 p-3 text-strong transition-colors hover:text-accent lg:col-start-2"
      >
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="size-8"
          animate={{ y: reducedMotion ? 0 : [0, 5, 0] }}
          transition={{
            duration: 1.3,
            repeat: reducedMotion ? 0 : Infinity,
            repeatDelay: 0.5,
            ease: 'easeInOut',
          }}
        >
          <path d="M12 4v16m-6-6 6 6 6-6" />
        </motion.svg>
      </a>
    </motion.div>
  );
}
