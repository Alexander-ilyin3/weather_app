import { createSlice } from '@reduxjs/toolkit';

export const citiesSlice = createSlice({
  name: 'city',
  initialState: {
    value: null,
  },
  reducers: {
    saveCity: (_state, { payload }) => payload,
    clearCities: (state) => {
      state.value = null;
    },
  },
});

export const { saveCity, clearCities } = citiesSlice.actions;
