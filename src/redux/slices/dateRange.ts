import { createSlice } from '@reduxjs/toolkit';

export const dateRangeSlice = createSlice({
  name: 'dateRange',
  initialState: {
    value: null,
  },
  reducers: {
    saveDateRange: (_state, { payload }) => payload,
  },
});

export const { saveDateRange } = dateRangeSlice.actions;
