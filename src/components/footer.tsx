export function Footer() {
  const buildDate = new Date();
  const lastUpdated = `${buildDate.toLocaleString('en-US', {
    month: 'long',
    timeZone: 'UTC',
  })}, ${buildDate.getUTCFullYear()}`;

  return (
    <footer className="mt-auto flex min-h-8 flex-col gap-1 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <span>Built with: Next.js | React | Tailwind</span>
      <span>
        Last updated:{' '}
        <time dateTime={buildDate.toISOString().slice(0, 7)}>{lastUpdated}</time>
      </span>
    </footer>
  );
}
