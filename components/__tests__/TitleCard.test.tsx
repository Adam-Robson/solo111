import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TitleCard from '../TitleCard';
import SocialIconLinks from '../SocialIconLinks';

describe('TitleCard', () => {
  test('renders TitleCard component', () => {
    render(<TitleCard />);
    expect(screen.getByText('portfolio')).toBeTruthy();
  });


});

describe('SocialIconLinks', () => {
  test('renders SocialIconLinks component', () => {
    render(<SocialIconLinks />);
    expect(screen.getByTestId('icon-links')).toBeTruthy();
  })
})
