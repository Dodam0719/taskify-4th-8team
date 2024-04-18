import React, { MouseEventHandler, ReactNode } from 'react';
import { BUTTON_COMPONENTS } from './Button.style';

interface Props {
  children: ReactNode;
  className?: string;
  variant:
    | 'login'
    | 'signup'
    | 'accept'
    | 'reject'
    | 'delete'
    | 'addColumn'
    | 'addTodo'
    | 'deleteDashboard'
    | 'pagenation'
    | 'addDashboard'
    | 'dashboard';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ variant, ...props }: Props) => {
  const Component = BUTTON_COMPONENTS[variant] || null;
  return Component ? <Component {...props} /> : null;
};

export default Button;
