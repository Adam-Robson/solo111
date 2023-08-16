import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading on page', () => {
  render(<App />);
  const headingEl = screen.getByText(/this is a portfolio/i);
  expect(headingEl).toBeInTheDocument();
});

test('renders bio link', () => {
  render(<App />);
  const linkEl = screen.getByText(/bio/i);
  expect(linkEl).toBeInTheDocument();
});

test('renders projects link', () => {
  render(<App />);
  const linkEl = screen.getByText(/projects/i);
  expect(linkEl).toBeInTheDocument();
});

test('renders arts link', () => {
  render(<App />);
  const linkEl = screen.getByText(/arts/i);
  expect(linkEl).toBeInTheDocument();
});

test('renders resume link', () => {
  render(<App />);
  const linkEl = screen.getByText(/resume/i);
  expect(linkEl).toBeInTheDocument();
});

test('renders misc link', () => {
  render(<App />);
  const linkEl = screen.getByText(/misc/i);
  expect(linkEl).toBeInTheDocument();
});

test('renders author name', () => {
  render(<App />);
  const nameEl = screen.getByText(/adam robson/i);
  expect(nameEl).toBeInTheDocument();
});
