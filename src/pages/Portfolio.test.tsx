import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Portfolio } from './Portfolio';
import { portfolioProjects } from '../data/portfolio';

describe('Portfolio', () => {
  it('renders every structured portfolio project', () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>,
    );

    for (const project of portfolioProjects) {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
      expect(screen.getByText(project.summary)).toBeInTheDocument();
    }

    expect(screen.getAllByRole('link', { name: 'View case study' })).toHaveLength(
      portfolioProjects.length,
    );
  });
});
