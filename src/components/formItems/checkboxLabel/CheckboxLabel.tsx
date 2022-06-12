import type { FormEvent } from 'react';

import './CheckboxLabel.scss';

type CheckboxProps = {
  id: string;
  name: string;
  isChecked: boolean;
  onChange: (event: FormEvent) => void;
};

const Checkbox = ({ isChecked, id, name, onChange }: CheckboxProps) => (
  <input
    checked={isChecked}
    className="checkbox"
    id={id}
    name={name}
    onChange={onChange}
    type="checkbox"
  />
);

type CheckboxLabelProps = CheckboxProps & {
  labelText: string;
  row?: 'normal' | 'reverse';
};

const CheckboxLabel = ({
  labelText,
  isChecked,
  id,
  name,
  row = 'normal',
  onChange,
}: CheckboxLabelProps) => (
  <div className={`checkbox-container ${row}`}>
    <Checkbox id={id} isChecked={isChecked} name={name} onChange={onChange} />
    <label htmlFor={id}>{labelText}</label>
  </div>
);

export { Checkbox, CheckboxLabel };
