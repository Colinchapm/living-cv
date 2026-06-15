import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Portfolio } from './Portfolio';
import { portfolioCards } from '../data/portfolio';

describe('Portfolio', () => {
  it('renders every structured portfolio project', () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>,
    );

    for (const project of portfolioCards) {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
      expect(screen.getByText(project.problemSolved)).toBeInTheDocument();
    }

    expect(screen.getAllByRole('link', { name: 'View case study' })).toHaveLength(
      portfolioCards.length - 1,
    );

    const caseStudyLinks = screen.getAllByRole('link', { name: 'View case study' });

    for (const [index, project] of portfolioCards.slice(1).entries()) {
      const card = screen.getByRole('heading', { name: project.title }).closest('article');

      expect(card).not.toBeNull();
      expect(
        within(card as HTMLElement).getByText((_, element) =>
          Boolean(element?.textContent === project.primaryPlatform),
        ),
      ).toBeInTheDocument();
      expect(caseStudyLinks[index]).toHaveAttribute('href', project.caseStudyPath);
    }

    expect(screen.getByRole('link', { name: 'View project evidence' })).toHaveAttribute(
      'href',
      '/',
    );
    const constructionCard = screen
      .getByRole('heading', { name: 'Construction Services Marketplace' })
      .closest('article');

    expect(constructionCard).not.toBeNull();
    expect(
      within(constructionCard as HTMLElement).getByRole('link', { name: 'Case study available' }),
    ).toHaveAttribute('href', '/portfolio/construction-services-marketplace');
    expect(
      within(constructionCard as HTMLElement).getByRole('link', { name: 'View case study' }),
    ).toHaveAttribute('href', '/portfolio/construction-services-marketplace');
  });
});
