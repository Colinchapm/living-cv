import { render, screen, within } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AppLayout } from './AppLayout';
import { Home } from '../pages/Home';

function renderHeader(path = '/') {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <AppLayout />,
        children: [{ index: true, element: <Home /> }],
      },
    ],
    { initialEntries: [path] },
  );

  render(<RouterProvider router={router} />);
}

describe('Header', () => {
  it('renders keyboard-accessible primary navigation links', () => {
    renderHeader();

    const navigation = screen.getByRole('navigation', { name: /primary navigation/i });

    expect(navigation).toBeInTheDocument();
    expect(within(navigation).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(within(navigation).getByRole('link', { name: 'Portfolio' })).toHaveAttribute(
      'href',
      '/portfolio',
    );
    expect(within(navigation).getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '/contact',
    );
  });
});
