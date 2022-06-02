import React, { ReactEventHandler } from 'react';

interface ButtonProps {
  label: string;
  onClick: ReactEventHandler;
}

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

export default Button;
