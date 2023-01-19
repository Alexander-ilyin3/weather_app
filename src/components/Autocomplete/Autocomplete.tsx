import React from 'react';

import s from './Autocomplete.module.scss';

type PropTypes = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const Autocomplete: React.FC<PropTypes> = ({ label, value, onChange, placeholder }) => {
  return (
    <div className={s.Root}>
      {label && <label htmlFor="autocomplete">{label}</label>}
      <input id="autocomplete" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};
