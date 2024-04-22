import React, { MouseEventHandler, ReactNode } from 'react';
import { BUTTON_COMPONENTS } from './Button.style';
import { CSSProperties } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  $width: CSSProperties['width'];
  $height: CSSProperties['height'];
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
}

const Button = ({ variant, ...props }: Props) => {
  const Component = BUTTON_COMPONENTS[variant];
  return Component ? <Component {...props} /> : null;
};

export default Button;
