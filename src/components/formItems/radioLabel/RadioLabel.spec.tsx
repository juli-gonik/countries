import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Radio, RadioLabel } from './RadioLabel';

describe('radio', () => {
  it('should render', () => {
    expect.assertions(1);

    const mockOnChange = jest.fn();

    render(
      <Radio
        id="id"
        isChecked
        name="name"
        onChange={mockOnChange}
        value="value"
      />,
    );

    const radio = screen.getByRole('radio');

    expect(radio).toBeInTheDocument();
  });

  it('should trigger onChange function on radio change', () => {
    expect.assertions(1);

    const mockOnChange = jest.fn();

    render(
      <>
        <Radio
          id="id"
          isChecked
          name="name"
          onChange={mockOnChange}
          value="value"
        />
        <Radio
          id="id"
          isChecked={false}
          name="name"
          onChange={mockOnChange}
          value="value"
        />
      </>,
    );

    const [, radio2] = screen.getAllByRole('radio');

    userEvent.click(radio2);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});

describe('radioLabel', () => {
  it('should render', () => {
    expect.assertions(2);

    const mockOnChange = jest.fn();

    render(
      <RadioLabel
        id="id"
        isChecked
        labelText="Label"
        name="name"
        onChange={mockOnChange}
        value="value"
      />,
    );

    const radio = screen.getByRole('radio');
    const label = screen.getByLabelText('Label');

    expect(radio).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
});
