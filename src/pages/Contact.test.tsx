import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Contact } from './Contact';

describe('Contact', () => {
  it('validates required fields and email format', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.click(screen.getByRole('button', { name: 'Validate message' }));

    expect(screen.getByText('Enter your name.')).toBeInTheDocument();
    expect(screen.getByText('Enter your email address.')).toBeInTheDocument();
    expect(screen.getByText('Enter a message.')).toBeInTheDocument();

    await user.type(screen.getByLabelText('Name'), 'Reviewer');
    await user.type(screen.getByLabelText('Email'), 'not-an-email');
    await user.type(screen.getByLabelText('Message'), 'Hello Colin');
    await user.click(screen.getByRole('button', { name: 'Validate message' }));

    expect(screen.getByText('Enter a valid email address.')).toBeInTheDocument();
  });

  it('shows a development-mode success message for valid input', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByLabelText('Name'), 'Reviewer');
    await user.type(screen.getByLabelText('Email'), 'reviewer@example.com');
    await user.type(screen.getByLabelText('Message'), 'Please contact me about a platform role.');
    await user.click(screen.getByRole('button', { name: 'Validate message' }));

    expect(screen.getByRole('status')).toHaveTextContent('Development mode');
  });
});
