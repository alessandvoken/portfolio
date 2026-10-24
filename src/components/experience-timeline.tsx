'use client';

import { stagger, useAnimate, useReducedMotion, type AnimationSequence } from 'motion/react';
import { useEffect } from 'react';
import { jobs } from '@/data/experience';

export function ExperienceTimeline() {
  const [scope, animate] = useAnimate<HTMLOListElement>();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const sequence: AnimationSequence = [];
    let start = 0.48;
    jobs.forEach((job, index) => {
      const item = `[data-job="${index}"]`;
      const next = start + 0.72 + (job.projects ? (job.projects.length + 1) * 0.12 : 0);
      sequence.push(
        [`${item} .timeline-dot`, { scale: [0, 1] }, { at: start, duration: 0.16, ease: [0.34, 1.56, 0.64, 1] }],
        [`${item} .timeline-role`, { opacity: [0, 1], x: ['var(--from-dot)', 0] }, { at: start + 0.16, duration: 0.32, ease: [0.22, 1, 0.36, 1] }],
      );
      if (job.projects) {
        sequence.push([`${item} .timeline-client`, { opacity: [0, 1], y: [-8, 0] }, {
          at: start + 0.28, delay: stagger(0.12), duration: 0.16, ease: 'easeOut',
        }]);
      }
      if (index < jobs.length - 1) {
        const lineStart = job.projects ? start + 0.28 : next - 0.32;
        sequence.push([`${item} .timeline-line`, { scaleY: [0, 1] }, {
          at: lineStart, duration: next - lineStart, ease: 'easeInOut',
        }]);
      }
      start = next;
    });
    const animation = animate(sequence);
    return () => animation.complete();
  }, [animate, reducedMotion, scope]);

  return (
    <ol ref={scope}>
      {jobs.map((job, index) => (
        <li
          key={job.role}
          data-job={index}
          className="relative grid grid-cols-1 items-baseline gap-x-4 gap-y-2 ps-6 pb-10 sm:grid-cols-[7rem_minmax(0,1fr)] md:pb-12 last:pb-0"
        >
          {index < jobs.length - 1 && (
            <span aria-hidden="true" className="timeline-line absolute inset-s-1 top-3 h-full w-0.5 origin-top bg-accent" />
          )}
          <span
            aria-hidden="true"
            className={`timeline-dot absolute inset-s-0 top-1.75 size-2.5 rounded-full ${job.end === null ? 'bg-accent' : 'border-2 border-accent bg-bg'}`}
          />
          <p className="timeline-role text-xs font-medium uppercase tracking-[0.08em] text-muted tabular-nums [--from-dot:-1.5rem]">
            {`${job.start} – ${job.end ?? 'Present'}`}
          </p>
          <div className="[--from-dot:-1.5rem] sm:[--from-dot:-9.5rem]">
            <h3 className="timeline-role font-semibold">
              {job.role}{' '}
              <span className="whitespace-nowrap font-normal text-muted">· {job.company}</span>
            </h3>
            {job.projects && (
              <>
                <p className="timeline-client mt-6 text-xs font-medium uppercase tracking-[0.08em] text-muted">Clients</p>
                <ul className="mt-3 space-y-6 text-sm">
                  {job.projects.map((project) => (
                    <li key={project.client} className="timeline-client">
                      <h4 className="font-medium">{project.client}</h4>
                      <p className="mt-1.5 leading-relaxed text-muted text-pretty">{project.description}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
