import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
});

const store = configureStore({
  reducer,
});

store.dispatch({ type: 'getRockets', payload: [1, 2, 2] });

export default store;
