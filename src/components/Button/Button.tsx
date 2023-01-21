import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import s from './Button.module.scss';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type PropTypes = {
  label?: string;
  onClick?: () => void;
  classes?: string;
} & ButtonProps &
  PropsWithChildren;

export const Button: React.FC<PropTypes> = ({ onClick, label, classes, children }) => {
  return (
    <button className={clsx(s.Root, classes)} onClick={onClick}>
      {children || label}
    </button>
  );
};
