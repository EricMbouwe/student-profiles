import { render, screen } from '@testing-library/react';
import Profile from '../components/Profile';

test('renders Home Title', () => {
  render(<Profile />);
  const titleElement = screen.getByText(/Home/i);
  expect(titleElement).toBeInTheDocument();
});
