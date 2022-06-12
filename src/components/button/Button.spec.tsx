import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('button', () => {
  it('should render with children', () => {
    expect.assertions(2);

    const mockOnClick = jest.fn();

    render(
      <Button key="key" onClick={mockOnClick} type="primary" variant="action">
        Hello
      </Button>,
    );

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();

    expect(button).toHaveTextContent('Hello');
  });

  it('should call onClick action on click', () => {
    expect.assertions(1);

    const mockOnClick = jest.fn();

    render(
      <Button key="key" onClick={mockOnClick} type="primary" variant="action">
        Hello
      </Button>,
    );

    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
