import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Skills } from './Skills';
import { skillGroups } from '../data/skills';

describe('Skills', () => {
  it('renders all skill categories without proficiency ratings', () => {
    render(<Skills />);

    for (const group of skillGroups) {
      expect(screen.getByRole('heading', { name: group.title })).toBeInTheDocument();
    }

    expect(screen.queryByText(/%/)).not.toBeInTheDocument();
  });
});
