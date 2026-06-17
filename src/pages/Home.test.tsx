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

    expect(
      screen.getByRole('heading', {
        name: 'Colin Chapman - product-minded builder, problem solver, dad and carer.',
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/I build practical digital products around real constraints/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/break difficult problems into smaller, workable steps/i),
    ).toBeInTheDocument();
    expect(screen.getByText(profile.location)).toBeInTheDocument();
    expect(screen.getAllByText(profile.availability)).toHaveLength(2);
    expect(screen.getByText('Accessibility-minded')).toBeInTheDocument();
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
    expect(
      screen.getByRole('heading', { name: 'The Person Behind The Platform' }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Read my journey' })[0]).toHaveAttribute(
      'href',
      '/journey',
    );
    expect(screen.getByText(/The experience that shaped how I work/i)).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Read Construction Services Marketplace case study' }),
    ).toHaveAttribute('href', '/portfolio/construction-services-marketplace');
    expect(
      screen.getByRole('link', { name: 'Read Tattoo Work Marketplace case study' }),
    ).toHaveAttribute('href', '/portfolio/tattoo-work-marketplace');
  });
});
