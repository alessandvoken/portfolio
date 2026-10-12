import type { StaticImageData } from 'next/image';
import bulkImg from '@/assets/bulk-operations-dashboard.webp';

export type Project = {
  title: string;
  description: string;
  metric: string;
  stack: string[];
  liveUrl: string;
  screenshot: StaticImageData;
};

export const projects: Project[] = [
  {
    title: 'Bulk operations dashboard',
    description:
      'Sends reminders for a batch of invoices and deals with the ones that fail: temporary failures can be retried on their own, and a reminders can be undone. Filters, sorting and pages live in the URL, so a view survives a reload and can be shared. A built-in panel makes the server slow or unreliable, to try each case.',
    metric: 'LCP 0.6 s · CLS 0 · 38 unit tests',
    stack: [
      'React',
      'TypeScript',
      'Mantine',
      'TanStack Query',
      'TanStack Router',
    ],
    liveUrl: 'https://bulk-operations-dashboard.vercel.app',
    screenshot: bulkImg,
  },
];
