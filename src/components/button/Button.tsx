import {
  type ReactElement,
  type ReactNode,
  type MouseEventHandler,
} from 'react';

import './Button.scss';

type ButtonProps = {
  children: ReactNode;
  type: 'primary' | 'secondary';
  variant: 'action' | 'add' | 'delete';
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  children,
  type,
  variant,
  onClick,
}: ButtonProps): ReactElement => (
  <button
    className={`btn btn-${type} btn-${variant}`}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

export { Button };
