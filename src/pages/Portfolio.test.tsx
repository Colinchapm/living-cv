import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Portfolio } from './Portfolio';
import { portfolioProjects } from '../data/portfolio';

describe('Portfolio', () => {
  it('renders every structured portfolio project', () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>,
    );

    for (const project of portfolioProjects) {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
      expect(screen.getByText(project.summary)).toBeInTheDocument();
    }

    expect(screen.getAllByRole('link', { name: 'View case study' })).toHaveLength(
      portfolioProjects.length,
    );

    const caseStudyLinks = screen.getAllByRole('link', { name: 'View case study' });

    for (const [index, project] of portfolioProjects.entries()) {
      const card = screen.getByRole('heading', { name: project.title }).closest('article');

      expect(card).not.toBeNull();
      expect(
        within(card as HTMLElement).getByText((_, element) =>
          Boolean(
            element?.textContent ===
            `Primary reference architecture: ${project.referenceArchitecture}`,
          ),
        ),
      ).toBeInTheDocument();
      expect(caseStudyLinks[index]).toHaveAttribute('href', `/projects/${project.slug}`);
    }
  });
});
