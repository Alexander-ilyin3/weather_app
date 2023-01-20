import React, { useRef, useState } from 'react';

import { useOutsideClickHandler } from './hooks';

import s from './Autocomplete.module.scss';

type PropTypes<T> = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autocompleteData: T[];
  RenderItem: React.FC<T>;
  onItemSelect: (item: T) => void;
};

export const Autocomplete = <T,>({
  label,
  value,
  onChange,
  placeholder,
  autocompleteData,
  RenderItem,
  onItemSelect,
}: PropTypes<T>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpenFlag, setIsOpenFlag] = useState(false);

  useOutsideClickHandler(wrapperRef, () => setIsOpenFlag(false));

  return (
    <div className={s.Root} ref={wrapperRef}>
      {label && <label htmlFor="autocomplete">{label}</label>}
      <input
        ref={inputRef}
        id="autocomplete"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsOpenFlag(true)}
      />
      {!!autocompleteData.length && isOpenFlag && (
        <div>
          {autocompleteData.map((item, i) => (
            <div
              className={s.RenderItemContainer}
              onClick={() => {
                onItemSelect(item);
                setIsOpenFlag(false);
              }}
              key={i}
            >
              <RenderItem key={i} {...item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
