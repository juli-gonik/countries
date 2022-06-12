import type { FormEvent } from 'react';
import './SelectLabel.scss';

type OptionType = {
  value: string;
  label: string;
};

type OptionsProps = {
  options: OptionType[];
};

type SelectProps = {
  id: string;
  name: string;
  onChange: (event: FormEvent) => void;
  options: OptionType[];
  value?: string;
  emptySelect?: string;
};

const OptionList = ({ options }: OptionsProps) => (
  <>
    {options.map(({ value, label }) => (
      <option key={value} label={label} value={value} />
    ))}
  </>
);

const Select = ({
  id,
  name,
  onChange,
  emptySelect,
  value,
  options,
}: SelectProps) => (
  <select
    className="select"
    id={id}
    name={name}
    onChange={onChange}
    value={value}
  >
    {emptySelect === undefined || <option value="">{emptySelect}</option>}
    <OptionList options={options} />
  </select>
);

type SelectLabelProps = SelectProps & {
  labelText: string;
};

const SelectLabel = ({
  id,
  name,
  onChange,
  value,
  labelText,
  options,
  emptySelect,
}: SelectLabelProps) => (
  <div className="select-group">
    <label htmlFor={id}> {labelText} </label>
    <Select
      emptySelect={emptySelect}
      id={id}
      key={id}
      name={name}
      onChange={onChange}
      options={options}
      value={value}
    />
  </div>
);

export { Select, SelectLabel };
