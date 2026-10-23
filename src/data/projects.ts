type LiveProject = {
  status: 'live';
  title: string;
  description: string;
  metric: string;
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
      'A sprint board for planning and tracking work. Items move between states and can be reordered with the pointer or the keyboard. The focus is on what a rich client has to get right: a large backlog that stays smooth, and a board that stays consistent when several people edit simultaneously.',
    stack: ['React', 'TypeScript', 'HeroUI', 'React Aria', 'Tailwind CSS'],
    liveUrl: 'https://team-planner-delta.vercel.app',
  },
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
  },
  {
    status: 'in-progress',
    title: 'Incident status',
    description:
      'Runs an incident from the inside and tells users about it on a public status page. The team opens an incident, moves it through its phases and posts updates; the public page is served from cache, so it stays up when the product is down, and shows an update as soon as it is published.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
  },
];
