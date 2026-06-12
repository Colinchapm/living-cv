import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AppLayout } from '../components/AppLayout';
import { Home } from './Home';
import { Volunteering } from './Volunteering';
import { diySosVolunteering } from '../data/volunteering';

function renderVolunteeringRoute() {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <AppLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'volunteering', element: <Volunteering /> },
        ],
      },
    ],
    { initialEntries: ['/volunteering'] },
  );

  render(<RouterProvider router={router} />);
}

describe('Volunteering', () => {
  it('renders the DIY SOS volunteer route and gallery content', () => {
    renderVolunteeringRoute();

    expect(
      screen.getByRole('heading', { name: 'Community & Volunteer Experience' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: diySosVolunteering.title })).toBeInTheDocument();
    expect(screen.getByText(diySosVolunteering.role)).toBeInTheDocument();
    expect(screen.getByText(diySosVolunteering.project)).toBeInTheDocument();
    expect(screen.getByText(diySosVolunteering.period)).toBeInTheDocument();
    expect(screen.getByText(diySosVolunteering.description)).toBeInTheDocument();
    expect(screen.getByText(diySosVolunteering.technologyConnection)).toBeInTheDocument();

    expect(screen.getAllByRole('img')).toHaveLength(diySosVolunteering.gallery.length + 1);
    expect(
      screen.getByAltText('Volunteer team members beside the DIY SOS Big Build van'),
    ).toHaveAttribute('src', diySosVolunteering.heroImage.src);
    expect(
      screen.getByAltText('Colin volunteering on the DIY SOS Big Build site'),
    ).toBeInTheDocument();
  });

  it('keeps public volunteering content privacy-safe', () => {
    renderVolunteeringRoute();

    const text = document.body.textContent ?? '';

    expect(text).not.toMatch(/\d+\s+\w+\s+(street|road|avenue|lane|drive|close|way)/i);
    expect(text).not.toMatch(/\b07\d{9}\b/);
    expect(text).not.toMatch(/[A-Z][a-z]+ Boys'? Club/);
    expect(text).not.toMatch(/BBC endorsement|endorsed by DIY SOS/i);
  });

  it('links to the volunteering route from the homepage card', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <AppLayout />,
          children: [
            { index: true, element: <Home /> },
            { path: 'volunteering', element: <Volunteering /> },
          ],
        },
      ],
      { initialEntries: ['/'] },
    );

    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole('link', { name: 'View volunteering experience and gallery' }),
    ).toHaveAttribute('href', '/volunteering');
  });
});
