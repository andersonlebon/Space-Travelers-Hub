/* eslint-disable comma-dangle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    getRockets: (rockets, action) => {
      const apiRocket = action.payload;
      apiRocket.forEach((rocket) => {
        rocket.reserved = false;
        rockets.push(rocket);
      });
    },

    reserveRocket: (rockets, action) => {
      const index = rockets.find((rocket) => rocket.id === action.payload.id);
      index.reserved = true;
    },
  },
});

export const { getRockets, reserveRocket } = slice.actions;

export default slice.reducer;
