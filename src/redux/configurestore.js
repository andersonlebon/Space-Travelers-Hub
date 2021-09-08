import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import rocketsReducer from './rockets/rockets';
import missionReducer from './mission/mission'

const reducer = combineReducers({
  rocketsReducer,
  missionReducer,
});

const store = configureStore({
  reducer,
});

// store.dispatch({ type: 'getRockets', payload: [1, 2, 2] });
export default store;
