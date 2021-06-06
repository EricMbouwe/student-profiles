import { render, screen } from '@testing-library/react';
import useFetch from '../utils/useFetch';

test('renders Home Title', () => {
  render(<useFetch />);
  const titleElement = screen.getByText(/Home/i);
  expect(titleElement).toBeInTheDocument();
});
