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
    expect(screen.getByText(profile.summary)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Download CV' })).toHaveAttribute(
      'href',
      profile.cvDownloadPath,
    );
    expect(screen.getByRole('link', { name: 'Download CV' })).toHaveAttribute('download');
  });
});
