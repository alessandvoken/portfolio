import type { StaticImageData } from 'next/image';
import bulkImg from '@/assets/bulk-operations-dashboard.webp';

type LiveProject = {
  status: 'live';
  title: string;
  description: string;
  metric: string;
  stack: string[];
  liveUrl: string;
  screenshot: StaticImageData;
};

type InProgressProject = {
  status: 'in-progress';
  title: string;
  description: string;
  stack: string[];
};

export type Project = LiveProject | InProgressProject;

export const projects: Project[] = [
  {
    status: 'live',
    title: 'Bulk operations dashboard',
    description:
      'Sends reminders for a batch of invoices and deals with the ones that fail: temporary failures can be retried on their own, and reminders can be undone. Filters, sorting and pages live in the URL, so a view survives a reload and can be shared. A built-in panel makes the server slow or unreliable, to try each case.',
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
  {
    status: 'in-progress',
    title: 'Incident status',
    description:
      'Runs an incident from the inside and tells users about it on a public status page. The team opens an incident, moves it through its phases and posts updates; the public page is served from cache, so it stays up when the product is down, and shows an update as soon as it is published.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
  },
];
