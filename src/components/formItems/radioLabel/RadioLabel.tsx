import type { FormEvent } from 'react';

import './RadioLabel.scss';

type RadioProps = {
  id: string;
  name: string;
  value: string;
  isChecked: boolean;
  onChange: (event: FormEvent) => void;
};

const Radio = ({ isChecked, id, name, onChange, value }: RadioProps) => (
  <input
    checked={isChecked}
    className="radio"
    id={id}
    name={name}
    onChange={onChange}
    type="radio"
    value={value}
  />
);

type RadioLabelProps = RadioProps & {
  labelText: string;
};

const RadioLabel = ({
  labelText,
  isChecked,
  id,
  name,
  value,
  onChange,
}: RadioLabelProps) => (
  <div className="radio-container">
    <Radio
      id={id}
      isChecked={isChecked}
      name={name}
      onChange={onChange}
      value={value}
    />
    <label htmlFor={id}>{labelText}</label>
  </div>
);

export { Radio, RadioLabel };
