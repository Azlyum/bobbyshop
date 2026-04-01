import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the booking and contact actions', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /real repair work\. clean custom paint\. a shop that still builds by hand\./i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /email the shop/i })).toHaveAttribute(
    'href',
    expect.stringContaining('mailto:')
  );
  expect(screen.getAllByRole('link', { name: /give us a call/i }).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { name: /questions customers usually ask/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /reach the shop directly by email\./i })).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /request build slot/i })).not.toBeInTheDocument();
});
