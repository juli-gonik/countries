import type { ReactElement, ReactNode } from 'react';

import './Row.scss';

type AutoFit = {
  gridType: 'auto-fit';
};

type Fixed = {
  gridType: 'fixed';
  columnAmount: number;
};

type RowProps = {
  rowType: AutoFit | Fixed;
  columnSize: string;
  children: ReactNode;
  rowSize?: string;
  gap?: string;
  align?: 'center' | 'end' | 'start';
  justify?: 'around' | 'between' | 'center' | 'end' | 'evenly' | 'start';
  className?: string;
};

const Row = ({
  columnSize,
  rowSize,
  rowType,
  gap = '1rem',
  align = 'center',
  children,
  justify = 'between',
  className = '',
}: RowProps): ReactElement => {
  const fixed = rowType.gridType === 'fixed';
  const style = {
    gap,

    gridTemplateColumns: fixed
      ? `repeat(${rowType.columnAmount}, ${columnSize})`
      : `repeat(auto-fit, minmax(${columnSize}, 1fr))`,

    gridAutoRows: rowSize,
  };

  return (
    <div
      className={`row align-${align} justify-${justify} ${className}`}
      data-testid="row"
      style={style}
    >
      {children}
    </div>
  );
};

export { Row };
export type { AutoFit, Fixed };
