import React from 'react';

import s from './EmptyState.module.scss';

export const EmptyState: React.FC = () => {
  return (
    <div className={s.Root}>
      <div className={s.EmptyState}>
        <div>
          <h1>Choose city</h1>
          <img src="image/01d.png"></img>
        </div>
      </div>
    </div>
  );
};
