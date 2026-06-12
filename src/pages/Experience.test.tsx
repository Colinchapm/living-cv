import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Experience } from './Experience';
import { experienceEntries } from '../data/experience';
import { profile } from '../data/profile';
import { diySosVolunteering } from '../data/volunteering';

describe('Experience', () => {
  it('renders verified experience content', () => {
    render(
      <MemoryRouter>
        <Experience />
      </MemoryRouter>,
    );

    for (const entry of experienceEntries) {
      expect(screen.getByRole('heading', { name: entry.title })).toBeInTheDocument();
      expect(screen.getByText(entry.organisation)).toBeInTheDocument();
      expect(screen.getByText(entry.period)).toBeInTheDocument();
    }

    expect(screen.getByRole('heading', { name: profile.volunteering.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: diySosVolunteering.title })).toBeInTheDocument();
    expect(screen.getByText(diySosVolunteering.period)).toBeInTheDocument();
    expect(screen.getByText(diySosVolunteering.project)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'View volunteering gallery' })).toHaveAttribute(
      'href',
      '/volunteering',
    );
  });
});
