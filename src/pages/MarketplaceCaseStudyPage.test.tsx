import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { MarketplaceCaseStudyPage } from './MarketplaceCaseStudyPage';
import { marketplaceCaseStudies } from '../data/marketplaceCaseStudies';

function renderCaseStudy(slug: string) {
  const project = marketplaceCaseStudies.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`Missing test project: ${slug}`);
  }

  render(
    <MemoryRouter>
      <MarketplaceCaseStudyPage project={project} />
    </MemoryRouter>,
  );

  return project;
}

describe('MarketplaceCaseStudyPage', () => {
  it('renders the construction services marketplace case study from structured data', () => {
    const project = renderCaseStudy('construction-services-marketplace');

    expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
    expect(screen.getByText(project.challenge)).toBeInTheDocument();
    expect(
      screen.getByText('Postcode or geocoding service, provider to be selected during discovery.'),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText('Wireframe of a construction marketplace job request flow'),
    ).toBeInTheDocument();
    expect(screen.getAllByText('Cloud SQL').length).toBeGreaterThan(0);
  });

  it('renders the tattoo work marketplace case study from structured data', () => {
    const project = renderCaseStudy('tattoo-work-marketplace');

    expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
    expect(screen.getByText(project.challenge)).toBeInTheDocument();
    expect(
      screen.getByText(
        'Deposit payment provider, deliberately unspecified until requirements are validated.',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText('Wireframe of tattoo marketplace style-led artist discovery'),
    ).toBeInTheDocument();
    expect(screen.getAllByText('Firestore').length).toBeGreaterThan(0);
  });

  it('renders table of contents, KPI labels and no fake metrics as real outcomes', () => {
    const project = renderCaseStudy('construction-services-marketplace');
    const toc = screen.getByRole('navigation', { name: 'Case study contents' });

    expect(within(toc).getByRole('link', { name: 'Architecture' })).toHaveAttribute(
      'href',
      '#architecture',
    );
    expect(screen.getByText('Indicative KPI')).toBeInTheDocument();
    expect(screen.getAllByText('Target KPI')).toHaveLength(
      project.metrics.filter((metric) => metric.kind === 'Target KPI').length,
    );
    expect(screen.getByText(/does not claim live customers, revenue/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/revenue increased|paying customers|production results/i),
    ).not.toBeInTheDocument();
  });
});
