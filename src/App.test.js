import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading on home page', () => {
  render(<App />);
  const headingElement = screen.getByText(/this is a portfolio/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders bio link on home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/bio/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders projects link on home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/projects/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders arts link on home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/arts/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders resume on home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/resume/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders buy me a coffee icon link on home page', () => {
  render(<App />);
  const iconElement = screen.getByTestId('coffee-icon-link');
  expect(iconElement).toBeInTheDocument();
});

test('renders github icon link on home page', () => {
  render(<App />);
  const iconElement = screen.getByTestId('github-icon-link');
  expect(iconElement).toBeInTheDocument();

});

test('renders linkedin icon link on home page', () => {
  render(<App />);
  const iconElement = screen.getByTestId('linkedin-icon-link');
  expect(iconElement).toBeInTheDocument();

});

test('renders spotify icon link home page', () => {
  render(<App />);
  const iconElement = screen.getByTestId('spotify-icon-link');
  expect(iconElement).toBeInTheDocument();
});