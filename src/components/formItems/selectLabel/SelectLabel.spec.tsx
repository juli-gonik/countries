import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Select, SelectLabel } from './SelectLabel';

const emptyOptions = [
  {
    value: '',
    label: '',
  },
];

const options = [
  {
    value: '1',
    label: '2',
  },
  {
    value: '3',
    label: '4',
  },
];

describe('test select', () => {
  it('should render', () => {
    expect.assertions(1);

    const mockOnChange = jest.fn();

    render(
      <Select
        id="id"
        name="name"
        onChange={mockOnChange}
        options={emptyOptions}
        value="value"
      />,
    );

    const select = screen.getByRole('combobox');

    expect(select).toBeInTheDocument();
  });

  it('should render with one option', () => {
    expect.assertions(1);

    const mockOnChange = jest.fn();

    render(
      <Select
        emptySelect="Select Options"
        id="id"
        name="name"
        onChange={mockOnChange}
        options={emptyOptions}
        value="value"
      />,
    );

    const select = screen.getByRole('combobox');

    expect(select).toHaveDisplayValue('Select Options');
  });

  it('should render with more than one option', () => {
    expect.assertions(1);

    const mockOnChange = jest.fn();

    render(
      <Select
        id="id"
        name="name"
        onChange={mockOnChange}
        options={options}
        value="value"
      />,
    );

    const { children } = screen.getByRole('combobox');

    expect(children).toHaveLength(2);
  });
});

describe('text selectLabel', () => {
  it('should render', () => {
    expect.assertions(2);

    const mockOnChange = jest.fn();

    render(
      <SelectLabel
        id="id"
        labelText="Label"
        name="name"
        onChange={mockOnChange}
        options={emptyOptions}
        value="value"
      />,
    );

    const select = screen.getByRole('combobox');
    const label = screen.getByLabelText('Label');

    expect(select).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
});
