import type { ReactNode } from 'react';

type Props = {
  href: string;
  label: string;
  children: ReactNode;
};

export function IconLink({ href, label, children }: Props) {
  return (
    <a
      href={href}
      className="group relative inline-flex p-1 text-muted hover:text-strong"
    >
      {children}
      <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-strong px-2 py-1 text-xs font-medium text-bg opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-visible:opacity-100">
        {label}
      </span>
    </a>
  );
}
