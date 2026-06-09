import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AppLayout } from './AppLayout';
import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import { Portfolio } from '../pages/Portfolio';

function renderHeader(path = '/') {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <AppLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'portfolio', element: <Portfolio /> },
          { path: 'contact', element: <Contact /> },
        ],
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

  it('navigates between pages with primary navigation links', async () => {
    const user = userEvent.setup();
    renderHeader();

    const navigation = screen.getByRole('navigation', { name: /primary navigation/i });
    await user.click(within(navigation).getByRole('link', { name: 'Portfolio' }));

    expect(await screen.findByRole('heading', { name: /^Portfolio$/ })).toBeInTheDocument();
  });
});
