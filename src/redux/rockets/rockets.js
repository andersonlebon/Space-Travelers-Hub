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
      const index = rockets.findIndex(
        (rocket) => rocket.id === action.payload.id
      );
      rockets[index].reserved = true;
    },
  },
});

export default slice.reducer;
