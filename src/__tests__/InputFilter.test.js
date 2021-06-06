import { render, screen } from '@testing-library/react';
import InputFilter from '../components/InputFilter';

test('renders Home Title', () => {
  render(<InputFilter />);
  const titleElement = screen.getByText(/Home/i);
  expect(titleElement).toBeInTheDocument();
});
