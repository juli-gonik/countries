import { render, screen } from '@testing-library/react';

import { type AutoFit, Row, type Fixed } from './Row';

describe('row', () => {
  const fixed: Fixed = {
    columnAmount: 3,
    gridType: 'fixed',
  };

  const autoFit: AutoFit = {
    gridType: 'auto-fit',
  };

  const columnSize = '300px';

  it('should render', () => {
    expect.assertions(2);

    render(
      <Row columnSize={columnSize} rowType={fixed}>
        <h1>Hello World</h1>
      </Row>,
    );

    const row = screen.getByTestId('row');
    const heading = screen.getByRole('heading');

    expect(row).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  it('should render with fixed styles', () => {
    expect.assertions(1);

    render(
      <Row columnSize={columnSize} rowType={fixed}>
        <h1>Hello World</h1>
      </Row>,
    );

    const row = screen.getByTestId('row');

    expect(row).toHaveStyle(
      `gridTemplateColumns: repeat(${fixed.columnAmount}, ${columnSize})`,
    );
  });

  it('should render with auto-fit styles', () => {
    expect.assertions(1);

    render(
      <Row columnSize={columnSize} rowType={autoFit}>
        <h1>Hello World</h1>
      </Row>,
    );

    const row = screen.getByTestId('row');

    expect(row).toHaveStyle(
      `gridTemplateColumns:repeat(auto-fit, minmax(${columnSize}, 1fr))`,
    );
  });
});
