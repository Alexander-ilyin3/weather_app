import React from 'react';

import s from './Button.module.scss';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type PropTypes = {
  label?: string;
  onClick?: () => void;
} & ButtonProps;

export const Button: React.FC<PropTypes> = ({ onClick, label }) => {
  return (
    <button className={s.Root} onClick={onClick}>
      {label}
    </button>
  );
};
