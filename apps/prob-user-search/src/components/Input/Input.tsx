import { ReactEventHandler } from 'react';
import './Input.scss';

interface InputProps {
  type: string;
  name?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: ReactEventHandler;
}

function Input({ type, name, id, value, placeholder, onChange }: InputProps) {
  const attributes: InputProps = {
    type,
  };

  placeholder && (attributes.placeholder = placeholder);
  name && (attributes.name = name);
  id && (attributes.id = id);
  value && (attributes.value = value);

  return <input {...attributes} onChange={onChange} />;
}

export default Input;
