import type { FormEvent } from 'react';
import './TextInputLabel.scss';

type InputProps = {
  id: string;
  name: string;
  value: string;
  onChange: (event: FormEvent) => void;
  placeholder?: string;
};

const TextInput = ({
  id,
  name,
  onChange,
  placeholder = '',
  value,
}: InputProps) => (
  <input
    className="text-input"
    id={id}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    type="text"
    value={value}
  />
);

type InputLabelProps = InputProps & {
  labelText: string;
};

const TextInputLabel = ({
  id,
  name,
  onChange,
  value,
  placeholder,
  labelText,
}: InputLabelProps) => (
  <div className="form-group">
    <label htmlFor={id}> {labelText} </label>
    <TextInput
      id={id}
      key={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  </div>
);

export { TextInput, TextInputLabel };
