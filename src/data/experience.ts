export type JobProject = {
  client: string;
  description: string;
};

export type Job = {
  start: number;
  end: number | null;
  role: string;
  company: string;
  projects?: JobProject[];
};

export const jobs: Job[] = [
  {
    start: 2024,
    end: null,
    role: 'Frontend Engineer',
    company: 'IBM',
    projects: [
      {
        client: 'State Accounting Office',
        description:
          'AI platform that searches legislation, drafts reports and processes documents. Winner of the Italian Digital Agenda Award 2025.',
      },
      {
        client: 'Italian tax courts',
        description:
          'Case-management app with ~2,000 users, shipped as an embeddable micro-frontend.',
      },
      {
        client: 'National Customs Agency',
        description:
          'Chat interface for an AI assistant, with responses streamed over WebSocket.',
      },
      {
        client: 'BPER Bank',
        description:
          'Bug fixes and support, plus new features and tests on the bank’s design system in Storybook.',
      },
    ],
  },
  {
    start: 2023,
    end: 2024,
    role: 'Frontend Developer',
    company: 'Freelance, London',
  },
  {
    start: 2017,
    end: 2023,
    role: 'Documentary Photographer',
    company: 'Freelance, London',
  },
];
