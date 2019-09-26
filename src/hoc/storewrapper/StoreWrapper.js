import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import api from '../../middleware/api';
import EntitiesListReducer from '../../containers/EntityContainer/reducer'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);


const allReducers = {
  ...EntitiesListReducer,
};

const store = createStoreWithMiddleware(combineReducers(allReducers));


const StoreWrapper = (props) => (
  <Provider store={store}>{props.children}</Provider>
);

export default StoreWrapper
