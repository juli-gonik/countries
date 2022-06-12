import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextInput, TextInputLabel } from './TextInputLabel';

describe('testInput', () => {
  it('should render', () => {
    expect.assertions(1);

    const mockOnChange = jest.fn();

    render(
      <TextInput id="id" name="name" onChange={mockOnChange} value="value" />,
    );

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
  });

  it('should trigger onChange function on input change', () => {
    expect.assertions(1);

    const mockOnChange = jest.fn();

    render(
      <TextInput id="id" name="name" onChange={mockOnChange} value="value" />,
    );

    const input = screen.getByRole('textbox');

    userEvent.type(input, 'Test');

    expect(mockOnChange).toHaveBeenCalledTimes(4);
  });
});

describe('textInputLabel', () => {
  it('should render', () => {
    expect.assertions(2);

    const mockOnChange = jest.fn();

    render(
      <TextInputLabel
        id="id"
        labelText="Label"
        name="name"
        onChange={mockOnChange}
        value="value"
      />,
    );

    const input = screen.getByRole('textbox');
    const label = screen.getByLabelText('Label');

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
});
