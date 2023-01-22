import { createSlice } from '@reduxjs/toolkit';
import { DateRangeButtonOptions } from 'src/features/DateRangeOptions/DateRangeOptions';

type InitialState = { value: null | DateRangeButtonOptions };

const initialState: InitialState = {
  value: null,
};

export const dateRangeSlice = createSlice({
  name: 'dateRange',
  initialState,
  reducers: {
    saveDateRange: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { saveDateRange } = dateRangeSlice.actions;
