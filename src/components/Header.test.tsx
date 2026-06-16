import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AppLayout } from './AppLayout';
import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import { Journey } from '../pages/Journey';
import { Portfolio } from '../pages/Portfolio';
import { Volunteering } from '../pages/Volunteering';

function renderHeader(path = '/') {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <AppLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'journey', element: <Journey /> },
          { path: 'portfolio', element: <Portfolio /> },
          { path: 'volunteering', element: <Volunteering /> },
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
    const menuButton = screen.getByRole('button', { name: 'Menu' });

    expect(navigation).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(within(navigation).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(within(navigation).getByRole('link', { name: 'Journey' })).toHaveAttribute(
      'href',
      '/journey',
    );
    expect(within(navigation).getByRole('link', { name: 'Portfolio' })).toHaveAttribute(
      'href',
      '/portfolio',
    );
    expect(within(navigation).getByRole('link', { name: 'Volunteering' })).toHaveAttribute(
      'href',
      '/volunteering',
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

  it('toggles the mobile navigation state', async () => {
    const user = userEvent.setup();
    renderHeader();

    const menuButton = screen.getByRole('button', { name: 'Menu' });

    await user.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  });
});
