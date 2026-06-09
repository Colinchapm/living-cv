import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { ProjectCaseStudy } from './ProjectCaseStudy';
import { portfolioProjects } from '../data/portfolio';

describe('ProjectCaseStudy', () => {
  it('renders each project route with required case-study sections', () => {
    for (const project of portfolioProjects) {
      const { unmount } = render(<ProjectRoute slug={project.slug} />);

      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: 'Problem statement' })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: 'Security considerations' })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: 'Evidence links' })).toBeInTheDocument();

      unmount();
    }
  });
});

function ProjectRoute({ slug }: { slug: string }) {
  const router = createMemoryRouter(
    [{ path: '/projects/:slug', element: <ProjectCaseStudy /> }],
    { initialEntries: [`/projects/${slug}`] },
  );

  return <RouterProvider router={router} />;
}
