import { render, screen } from '@testing-library/react';
import ProfileList from '../components/ProfileList';

test('renders Home Title', () => {
  render(<ProfileList />);
  const titleElement = screen.getByText(/Home/i);
  expect(titleElement).toBeInTheDocument();
});
