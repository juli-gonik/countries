import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox, CheckboxLabel } from './CheckboxLabel';

describe('checkBox', () => {
  it('should render', () => {
    expect.assertions(1);

    const mockOnChange = jest.fn();

    render(<Checkbox id="id" isChecked name="name" onChange={mockOnChange} />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
  });

  it('should trigger onChange function on checkbox change', () => {
    expect.assertions(1);

    const mockOnChange = jest.fn();

    render(<Checkbox id="id" isChecked name="name" onChange={mockOnChange} />);

    const checkbox = screen.getByRole('checkbox');

    userEvent.click(checkbox);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});

describe('checkboxLabel', () => {
  it('should render', () => {
    expect.assertions(2);

    const mockOnChange = jest.fn();

    render(
      <CheckboxLabel
        id="id"
        isChecked
        labelText="Label"
        name="name"
        onChange={mockOnChange}
      />,
    );

    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByLabelText('Label');

    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
});
