import React from 'react';

import { Header } from '../Header/Header';
import { SideCard } from '../SideCard/SideCard';
import { Footer } from 'src/features/Footer/Footer';
import { WeatherByTimeList } from 'src/features/WeatherByTimeList/WeatherByTimeList';

import s from './Layout.module.scss';

export const Layout: React.FC = () => {
  return (
    <div className={s.Root}>
      <div className={s.Paper}>
        <SideCard />
        <section className={s.WeatherInfoSection}>
          <Header />
          <WeatherByTimeList />
          <Footer />
        </section>
      </div>
    </div>
  );
};
