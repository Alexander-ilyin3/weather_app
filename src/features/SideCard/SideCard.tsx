import React from 'react';

import { EmptyState } from 'src/components/EmptyState/EmptyState';

import s from './SideCard.module.scss';

type PropTypes = {};

export const SideCard: React.FC<PropTypes> = () => {
  return (
    <div className={s.Root}>
      <EmptyState />
      <img className={s.BackgroundDecoration} src="image/Background Decoration.png"></img>
    </div>
  );
};
