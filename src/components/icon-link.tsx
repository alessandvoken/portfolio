import type { ReactNode } from 'react';
import { ArrowUpRightIcon } from '@/components/icons';

type Props = {
  href: string;
  label: string;
  children: ReactNode;
  newTab?: boolean;
};

export function IconLink({ href, label, children, newTab = false }: Props) {
  return (
    <a
      href={href}
      target={newTab ? '_blank' : undefined}
      className="group/icon relative inline-flex p-1 text-muted hover:text-strong"
    >
      {children}
      <span className="pointer-events-none absolute bottom-full left-1/2 inline-flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded bg-strong px-2 py-1 text-xs font-medium text-bg opacity-0 group-hover/icon:pointer-events-auto group-hover/icon:opacity-100 group-focus-visible/icon:opacity-100">
        {label}
        {newTab && (
          <>
            <span className="sr-only"> (opens in a new tab)</span>
            <ArrowUpRightIcon />
          </>
        )}
      </span>
    </a>
  );
}
