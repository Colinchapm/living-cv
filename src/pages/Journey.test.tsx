import { fireEvent, render, screen, within } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AppLayout } from '../components/AppLayout';
import { Home } from './Home';
import { Journey } from './Journey';

function renderJourney(path = '/journey') {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <AppLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'journey', element: <Journey /> },
        ],
      },
    ],
    { initialEntries: [path] },
  );

  render(<RouterProvider router={router} />);
}

describe('Journey', () => {
  it('renders the journey route, timeline and key personal story sections', () => {
    renderJourney();

    expect(
      screen.getByRole('heading', { name: 'The Person Behind The Platform' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Foundation Degree in Computing' }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { name: 'A Man of Duties' }).length).toBeGreaterThan(0);

    const timeline = screen.getByRole('list', { name: 'Journey timeline' });
    expect(within(timeline).getByText('2010')).toBeInTheDocument();
    expect(within(timeline).getByText('2025-Present')).toBeInTheDocument();
  });

  it('keeps public journey content privacy-safe', () => {
    renderJourney();

    const text = document.body.textContent ?? '';

    expect(text).not.toMatch(/\d+\s+\w+\s+(street|road|avenue|lane|drive|close|court)/i);
    expect(text).not.toMatch(/\b(?:\+44\s?7\d{3}|07\d{3})\s?\d{3}\s?\d{3}\b/);
    expect(text).not.toMatch(/NHS number|medication|therapy notes|school name/i);
  });

  it('renders accessible placeholders when optional images are missing', () => {
    renderJourney();

    const profileImage = screen.getByAltText('Portrait of Colin Chapman');
    fireEvent.error(profileImage);

    expect(screen.getByRole('img', { name: 'Portrait of Colin Chapman' })).toBeInTheDocument();
    expect(screen.getByText('Profile image placeholder')).toBeInTheDocument();
  });

  it('links to Journey from the homepage and footer navigation', () => {
    renderJourney('/');

    expect(screen.getByRole('link', { name: 'Read My Journey' })).toHaveAttribute(
      'href',
      '/journey',
    );

    const footer = screen.getByRole('contentinfo');
    expect(within(footer).getByRole('link', { name: 'Journey' })).toHaveAttribute(
      'href',
      '/journey',
    );
  });
});
