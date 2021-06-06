import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from '../App';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// Rendu
test('renders Home Title', () => {
  render(<App />, container);
  const titleElement = screen.getByText(/Home/i);
  expect(titleElement).toBeInTheDocument();
});
