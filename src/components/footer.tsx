export function Footer() {
  const buildDate = new Date();
  const lastUpdated = `${buildDate.toLocaleString('en-US', {
    month: 'long',
    timeZone: 'UTC',
  })}, ${buildDate.getUTCFullYear()}`;

  return (
    <footer className="mt-auto flex min-h-8 flex-wrap items-center justify-between gap-x-4 gap-y-2 text-sm">
      <span>
        <span className="text-muted">Built with: </span>
        Next.js <span className="text-muted">|</span> React{' '}
        <span className="text-muted">|</span> Tailwind
      </span>
      <span className="ml-auto text-muted">
        Last updated:{' '}
        <time dateTime={buildDate.toISOString().slice(0, 7)}>{lastUpdated}</time>
      </span>
    </footer>
  );
}
