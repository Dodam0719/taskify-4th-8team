import React, { MouseEventHandler, ReactNode } from 'react';
import { BUTTON_COMPONENTS } from './Button.style';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  $width: string;
  $height: string;
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
    | 'dashboard'
    | 'icon';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ variant, ...props }: Props) => {
  const Component = BUTTON_COMPONENTS[variant] || null;
  return Component ? <Component {...props} /> : null;
};

export default Button;
