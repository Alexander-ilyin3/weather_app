import { CityDto } from '@api/cities/models/cities.dto';

import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  value: null | CityDto;
};

const initialState: InitialState = {
  value: null,
};

export const citiesSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    saveCity: (state, { payload }) => {
      state.value = payload;
    },
    clearCities: (state) => {
      state.value = null;
    },
  },
});

export const { saveCity, clearCities } = citiesSlice.actions;
