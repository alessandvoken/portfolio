import { jobs } from '@/data/experience';

export function ExperienceTimeline() {
  return (
    <ol>
      {jobs.map((job) => (
        <li
          key={job.role}
          className={`relative grid grid-cols-[8rem_1fr] items-baseline gap-4 ps-6 pb-14 last:pb-0 before:absolute before:inset-s-1 before:top-3 before:h-full before:w-0.5 before:bg-accent last:before:hidden after:absolute after:inset-s-0 after:top-1.75 after:size-2.5 after:rounded-full ${
            job.end === null
              ? 'after:bg-accent'
              : 'after:border-2 after:border-accent after:bg-bg'
          }`}
        >
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted tabular-nums">
            {`${job.start} – ${job.end ?? 'Present'}`}
          </p>
          <div>
            <h3 className="font-semibold">
              {job.role}{' '}
              <span className="whitespace-nowrap font-normal text-muted">
                · {job.company}
              </span>
            </h3>
            {job.projects && (
              <>
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.08em] text-muted">
                  Clients
                </p>
                <ul className="mt-3 space-y-6 text-sm">
                  {job.projects.map((project) => (
                    <li key={project.client}>
                      <h4 className="font-medium">{project.client}</h4>
                      <p className="mt-1.5 leading-relaxed text-muted text-pretty">
                        {project.description}
                      </p>
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
