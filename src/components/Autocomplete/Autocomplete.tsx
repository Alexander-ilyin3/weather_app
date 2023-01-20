import React from 'react';

import s from './Autocomplete.module.scss';

type PropTypes<T> = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autocompleteData: T[];
  RenderItem: React.FC<T>;
};

export const Autocomplete = <T,>({
  label,
  value,
  onChange,
  placeholder,
  autocompleteData,
  RenderItem,
}: PropTypes<T>) => {
  return (
    <div className={s.Root}>
      {label && <label htmlFor="autocomplete">{label}</label>}
      <input id="autocomplete" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
      <div>
        {autocompleteData.map((props, i) => (
          <div className={s.RenderItemContainer} key={i}>
            <RenderItem key={i} {...props} />
          </div>
        ))}
      </div>
    </div>
  );
};
