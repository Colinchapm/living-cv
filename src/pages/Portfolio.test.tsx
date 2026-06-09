import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Portfolio } from './Portfolio';
import { portfolioProjects } from '../data/portfolio';

describe('Portfolio', () => {
  it('renders every structured portfolio project', () => {
    render(<Portfolio />);

    for (const project of portfolioProjects) {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
      expect(screen.getByText(project.summary)).toBeInTheDocument();
    }
  });
});
