import React from 'react';

import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { SideCard } from '../SideCard/SideCard';
import { Footer } from 'src/features/footer/Footer';

import s from './Layout.module.scss';

export const Layout: React.FC = () => {
  return (
    <div className={s.Root}>
      <div className={s.Paper}>
        <SideCard />
        <section className={s.WeatherInfoSection}>
          <Header />
          <Main />
          <Footer />
        </section>
      </div>
    </div>
  );
};
