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
    expect(screen.getByText('AWS | Azure | Google Cloud | DevOps | Platform Support')).toBeInTheDocument();
    expect(screen.getByText(profile.heroStatement)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Evidence, not just claims' })).toBeInTheDocument();
    expect(screen.getByText('Public GitHub source code')).toBeInTheDocument();
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
