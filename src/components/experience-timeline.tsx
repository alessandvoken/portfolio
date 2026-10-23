import { jobs, type Job } from '@/data/experience';

const rowCount = (job: Job) =>
  1 + (job.projects ? 1 + job.projects.length : 0);

const firstRows = jobs.map((_, index) =>
  jobs.slice(0, index).reduce((rows, job) => rows + rowCount(job), 0),
);

export function ExperienceTimeline() {
  return (
    <ol>
      {jobs.map((job, index) => {
        const row = firstRows[index];

        return (
          <li
            key={job.role}
            style={{
              '--step': index,
              '--row': row,
              '--next-step': index + 1,
              '--next-row': firstRows[index + 1],
            }}
            className={`relative grid grid-cols-1 items-baseline gap-x-4 gap-y-2 ps-6 pb-10 sm:grid-cols-[7rem_minmax(0,1fr)] md:pb-12 last:pb-0 before:absolute before:inset-s-1 before:top-3 before:h-full before:w-0.5 before:origin-top before:bg-accent last:before:hidden after:absolute after:inset-s-0 after:top-1.75 after:size-2.5 after:rounded-full motion-safe:before:animate-draw-down motion-safe:after:animate-dot-in ${
              job.end === null
                ? 'after:bg-accent'
                : 'after:border-2 after:border-accent after:bg-bg'
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted tabular-nums motion-safe:animate-job-in [--from-dot:-1.5rem]">
              {`${job.start} – ${job.end ?? 'Present'}`}
            </p>
            <div className="[--from-dot:-1.5rem] sm:[--from-dot:-9.5rem]">
              <h3 className="font-semibold motion-safe:animate-job-in">
                {job.role}{' '}
                <span className="whitespace-nowrap font-normal text-muted">
                  · {job.company}
                </span>
              </h3>
              {job.projects && (
                <>
                  <p
                    style={{ '--row': row + 1 }}
                    className="mt-6 text-xs font-medium uppercase tracking-[0.08em] text-muted motion-safe:animate-client-in"
                  >
                    Clients
                  </p>
                  <ul className="mt-3 space-y-6 text-sm">
                    {job.projects.map((project, projectIndex) => (
                      <li
                        key={project.client}
                        style={{ '--row': row + 2 + projectIndex }}
                        className="motion-safe:animate-client-in"
                      >
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
        );
      })}
    </ol>
  );
}
