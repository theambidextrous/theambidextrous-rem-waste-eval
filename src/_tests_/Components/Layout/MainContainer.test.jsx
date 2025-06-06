/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainContainer } from '../../../Components';

describe('MainContainer Component', () => {
  it('renders correctly', () => {
    render(<MainContainer><p>Hello main container</p></MainContainer>);
    expect(screen.getByText('Hello main container')).toBeInTheDocument();
  });
});