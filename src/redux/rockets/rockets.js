/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketsBasedURL = 'https://api.spacexdata.com/v3/rockets';

export const getRocketsFromApi = async (dispatch, getRockets) => {
  try {
    const { data } = await axios.get(rocketsBasedURL);
    dispatch(getRockets(data));
  } catch ({ message }) {
    dispatch({ type: 'getRocketsFail', payload: { error: message } });
  }
};

const slice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    getRockets: (rockets, action) => {
      const apiRocket = action.payload;
      apiRocket.forEach(({ rocket_name, description, flickr_images, id }) => {
        const newRocket = {
          id,
          rocket_name,
          reserved: false,
          description,
          flickr_images,
        };
        rockets.push(newRocket);
      });
    },

    reserveRocket: (rockets, action) => {
      const index = rockets.find((rocket) => rocket.id === action.payload.id);
      index.reserved = true;
    },

    getRocketsFail: (rockets) => rockets,
  },
});

export const { getRockets, reserveRocket } = slice.actions;

export default slice.reducer;
