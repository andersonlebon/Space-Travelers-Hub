import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
});

const store = configureStore({
  reducer,
});

export default store;
