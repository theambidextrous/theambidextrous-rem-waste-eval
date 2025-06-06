/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { StepperItemSeparator } from '../../../Components/Layout/StepperItemSeparator';

describe('StepperItemSeparator Component', () => {
  it('renders correctly when active', () => {
    const { container } = render(<StepperItemSeparator isActive={true} />);
    expect(container.firstChild).toHaveClass("bg-rem-700");
  });
  it('renders correctly when inactive', () => {
    const { container } = render(<StepperItemSeparator isActive={false} />);
    expect(container.firstChild).toHaveClass("bg-rem-gray-700");
  });
});