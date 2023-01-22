import $ from 'jquery';
import React, { useEffect } from 'react';

import { useAppSelector } from 'src/hooks';
import { weatherResponseSelector } from 'src/redux/selectors';

import s from './Footer.module.scss';

export const Footer: React.FC = () => {
  const weatherResponse = useAppSelector(weatherResponseSelector);

  const city = weatherResponse.value?.city.name;

  useEffect(() => {
    $('#weather-list').on('DOMSubtreeModified', function () {
      console.log('changed');

      const stringArray = $('span[hidden][data-temperature]')
        .map((_index, element) => {
          // @ts-ignore
          return element.attributes['data-temperature'].value;
        })
        .get();

      const itemCount = stringArray.length;
      const summ = stringArray.reduce((accum, nextValue) => {
        return accum + Number(nextValue);
      }, 0);
      const averageValue = Math.round(summ / itemCount);
      console.log(itemCount, summ);
      $('#average-temperature').text(averageValue + '°');
    });
  }, []);

  return (
    <div>
      <h1>Average Temperature</h1>
      <div className={s.Paper}>
        <span id="average-temperature"></span>
        <div className={s.LocationContainer}>
          <span>{city},</span>
          <span>Ukraine</span>
        </div>
        <img src="image/church.png"></img>
      </div>
    </div>
  );
};
