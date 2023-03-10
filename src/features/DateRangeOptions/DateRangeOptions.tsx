import clsx from 'clsx';
import React, { useState, useEffect } from 'react';

import { Button } from 'src/components/Button/Button';
// import { Button } from '../Button/Button';
import { useAppDispatch } from 'src/hooks';
import { saveDateRange } from 'src/redux/slices/dateRange';

import s from './DateRangeOptions.module.scss';

type PropTypes = {};

export enum DateRangeButtonOptions {
  TODAY = 'TODAY',
  WEEK = 'WEEK',
}

export const DateRangeOptions: React.FC<PropTypes> = () => {
  const [selectedOption, setSelectedOption] = useState<DateRangeButtonOptions>(DateRangeButtonOptions.TODAY);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(saveDateRange(selectedOption));
  }, [dispatch, selectedOption]);

  return (
    <div className={s.Root}>
      <Button
        classes={clsx(s.Button, { [s.Active]: selectedOption === DateRangeButtonOptions.TODAY })}
        value={DateRangeButtonOptions.TODAY}
        onClick={() => {
          setSelectedOption(DateRangeButtonOptions.TODAY);
        }}
      >
        <span className={clsx(s.Radio, { [s.Active]: selectedOption === DateRangeButtonOptions.TODAY })}></span>
        <span>Today</span>
      </Button>
      <div className={s.Radio}></div>
      <Button
        classes={clsx(s.Button, { [s.Active]: selectedOption === DateRangeButtonOptions.WEEK })}
        value={DateRangeButtonOptions.WEEK}
        onClick={() => {
          setSelectedOption(DateRangeButtonOptions.WEEK);
        }}
      >
        <span className={clsx(s.Radio, { [s.Active]: selectedOption === DateRangeButtonOptions.WEEK })}></span>
        <span>Week</span>
      </Button>
    </div>
  );
};
