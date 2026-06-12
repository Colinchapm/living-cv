import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Home } from './Home';
import { profile } from '../data/profile';

describe('Home', () => {
  it('renders the professional introduction and downloadable CV link', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Colin Chapman' })).toBeInTheDocument();
    expect(
      screen.getByText('AWS | Azure | Google Cloud | DevOps | Platform Support'),
    ).toBeInTheDocument();
    expect(screen.getByText(profile.displayRole)).toBeInTheDocument();
    expect(screen.getByText(profile.heroStatement)).toBeInTheDocument();
    expect(screen.getByText(profile.location)).toBeInTheDocument();
    expect(screen.getAllByText(profile.availability)).toHaveLength(2);
    expect(screen.getByRole('heading', { name: 'Evidence, not just claims' })).toBeInTheDocument();
    expect(screen.getByText('Workload Identity Federation')).toBeInTheDocument();
    expect(screen.getByText('Playwright')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Download CV' })).toHaveAttribute(
      'href',
      profile.cvDownloadPath,
    );
    expect(screen.getByRole('link', { name: 'Download CV' })).toHaveAttribute('download');
    expect(screen.getByRole('link', { name: 'View GitHub' })).toHaveAttribute(
      'href',
      profile.githubUrl,
    );
  });
});
