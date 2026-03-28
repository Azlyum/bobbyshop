import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the booking and contact actions', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /collision repair and custom builds/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /book an appointment with the shop/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /email the shop/i })).toHaveAttribute(
    'href',
    expect.stringContaining('mailto:')
  );
  expect(screen.getAllByRole('link', { name: /give us a call/i }).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { name: /questions customers usually ask/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /request build slot/i })).toBeInTheDocument();
});
