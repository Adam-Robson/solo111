import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Resume from './Resume';

it('displays image of resume', () => {
  render(
    <MemoryRouter>
      <Resume />
    </MemoryRouter>
  );
  const resumeEl = screen.getByTestId('resume');
  expect(resumeEl).toBeTruthy();
});

it('renders download link', () => {
  render(
    <MemoryRouter>
      <Resume />
    </MemoryRouter>
  );
  const downloadEl = screen.getByText(/download/i);
  expect(downloadEl).toBeInTheDocument();
});