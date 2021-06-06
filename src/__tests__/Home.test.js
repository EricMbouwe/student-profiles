import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

// Rendu
test('renders Home Title', () => {
  render(<Home />);
  const titleElement = screen.getByText(/Home/i);
  expect(titleElement).toBeInTheDocument();
});
