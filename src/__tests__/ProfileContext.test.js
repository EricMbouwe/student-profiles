import { render, screen } from '@testing-library/react';
import { ProfileProvider } from '../contexts/ProfileContext';

test('renders Home Title', () => {
  render(<ProfileProvider />);
  const titleElement = screen.getByText(/Home/i);
  expect(titleElement).toBeInTheDocument();
});
