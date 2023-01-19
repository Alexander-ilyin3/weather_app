import React from 'react';

import { Header } from '../Header/Header';

import s from './Layout.module.scss';

export const Layout: React.FC = () => {
  return (
    <div className={s.Root}>
      <div className={s.Paper}>
        <Header />
      </div>
    </div>
  );
};
