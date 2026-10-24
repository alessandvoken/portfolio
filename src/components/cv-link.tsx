import { ArrowUpRightIcon } from '@/components/icons';

export function CvLink({ className = '' }: { className?: string }) {
  return (
    <a
      href="/Alessandro_Perchiazzi_Frontend_Engineer_CV.pdf"
      target="_blank"
      className={`inline-flex items-center gap-1 whitespace-nowrap py-1 text-sm font-medium uppercase tracking-[0.08em] text-muted decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-strong focus-visible:text-strong focus-visible:underline ${className}`}
    >
      CV
      <span className="sr-only"> (PDF, opens in a new tab)</span>
      <span className="link-icon">
        <ArrowUpRightIcon />
      </span>
    </a>
  );
}
