type LiveProject = {
  status: 'live';
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
};

type InProgressProject = {
  status: 'in-progress';
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
};

export type Project = LiveProject | InProgressProject;

export const projects: Project[] = [
  {
    status: 'in-progress',
    title: 'Team planner',
    description:
      'A sprint board for planning and tracking work. Move and reorder items with a pointer or keyboard, with changes saved between visits. If someone changes a card while you are working, the board refreshes rather than overwriting their changes.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Supabase'],
    liveUrl: 'https://team-planner-delta.vercel.app',
  },
  {
    status: 'live',
    title: 'Bulk operations dashboard',
    description:
      'Sends reminders for a batch of invoices and deals with the ones that fail: temporary failures can be retried on their own, and reminders can be undone. Filters, sorting and pages live in the URL, so a view survives a reload and can be shared. A built-in panel makes the server slow or unreliable, to try each case.',
    stack: ['React', 'TypeScript', 'TanStack Query', 'TanStack Router', 'MSW'],
    liveUrl: 'https://bulk-operations-dashboard.vercel.app',
  },
  {
    status: 'in-progress',
    title: 'Incident status',
    description:
      'Runs an incident from the inside and tells users about it on a public status page. The team opens an incident, moves it through its phases and posts updates; the public page is served from cache, so it stays up when the product is down, and shows an update as soon as it is published.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
  },
];
