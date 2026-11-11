import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AppLayout } from './AppLayout';
import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import { Portfolio } from '../pages/Portfolio';
import { EBWOverview, CheerUpGothOverview } from '../pages/VentureOverview';

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
          { path: 'ebw', element: <EBWOverview /> },
          { path: 'cheer-up-goth', element: <CheerUpGothOverview /> },
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

  it('renders three accessible site-area tabs and switches to their preview pages', async () => {
    const user = userEvent.setup();
    renderHeader();

    const areas = screen.getByRole('navigation', { name: /site areas/i });
    expect(within(areas).getByRole('link', { name: 'Living CV' })).toHaveAttribute('href', '/');
    expect(within(areas).getByRole('link', { name: 'EBW' })).toHaveAttribute('href', '/ebw');
    expect(within(areas).getByRole('link', { name: 'Cheer Up Goth' })).toHaveAttribute(
      'href',
      '/cheer-up-goth',
    );

    await user.click(within(areas).getByRole('link', { name: 'EBW' }));
    expect(await screen.findByRole('heading', { name: /a new platform for british wrestling/i })).toBeInTheDocument();
    expect(within(areas).getByRole('link', { name: 'EBW' })).toHaveAttribute('aria-current', 'page');

    await user.click(within(areas).getByRole('link', { name: 'Cheer Up Goth' }));
    expect(await screen.findByRole('heading', { name: /because weekends are for the living/i })).toBeInTheDocument();
    expect(within(areas).getByRole('link', { name: 'Cheer Up Goth' })).toHaveAttribute('aria-current', 'page');
  });

  it('navigates between pages with primary navigation links', async () => {
    const user = userEvent.setup();
    renderHeader();

    const navigation = screen.getByRole('navigation', { name: /primary navigation/i });
    await user.click(within(navigation).getByRole('link', { name: 'Portfolio' }));

    expect(await screen.findByRole('heading', { name: /^Portfolio$/ })).toBeInTheDocument();
  });
});
