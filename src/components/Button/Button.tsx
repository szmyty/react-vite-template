import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button type="button" className="px-4 py-2 bg-blue-500 text-white" {...rest}>
    {children}
  </button>
);

export default Button;
