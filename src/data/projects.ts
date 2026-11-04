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
      'Sends reminders for a batch of invoices and deals with the ones that fail: temporary failures can be retried on their own, and reminders can be undone. Filters, sorting and pages live in the URL, so a view survives a reload and can be shared. A built-in panel simulates the server conditions.',
    stack: ['React', 'TypeScript', 'TanStack Query', 'TanStack Router', 'MSW'],
    liveUrl: 'https://bulk-operations-dashboard.vercel.app',
  },
  {
    status: 'live',
    title: 'Multiselect wrapper component',
    description:
      'An alternative multi-select built on react-select. Where react-select applies every click, this one keeps the choices as a draft until OK, so a filter fetches results once. Fully accessible, it applies values on one row as tags, with +N for the rest.',
    stack: ['React', 'TypeScript', 'Vitest', 'Playwright'],
    liveUrl: 'https://react-multiselect-with-tags.vercel.app',
  },
];
