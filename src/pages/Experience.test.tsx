import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Experience } from './Experience';
import { experienceEntries } from '../data/experience';
import { profile } from '../data/profile';

describe('Experience', () => {
  it('renders verified experience content', () => {
    render(<Experience />);

    for (const entry of experienceEntries) {
      expect(screen.getByRole('heading', { name: entry.title })).toBeInTheDocument();
      expect(screen.getByText(entry.organisation)).toBeInTheDocument();
      expect(screen.getByText(entry.period)).toBeInTheDocument();
    }

    expect(screen.getByRole('heading', { name: profile.volunteering.title })).toBeInTheDocument();
    expect(screen.getByText(profile.volunteering.summary)).toBeInTheDocument();
  });
});
