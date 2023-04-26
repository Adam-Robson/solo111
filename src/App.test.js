import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/projects/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/arts/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/contact/i);
  expect(linkElement).toBeInTheDocument();
});

