/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BottomBar } from '../../../Components';
import { MockSkip  } from '../../Mock';

describe('BottomBar Component', () => {
  it('renders correctly', () => {
    render(<BottomBar />);
    const elements = screen.getAllByText('Yard Skip');
    expect(elements.length).toEqual(2);
  });

  it('render skip data correctly', () => {
    render(<BottomBar skip={MockSkip} />);
    const elements = screen.getAllByText('40 Yard Skip');
    expect(elements.length).toEqual(2);
  });

});