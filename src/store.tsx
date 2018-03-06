import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StoreStateType } from './app/states/app.state';
import { autoReducers } from './app/auto/placead/reducer';

export default createStore<StoreStateType>(
    autoReducers,
    composeWithDevTools(applyMiddleware(thunk))
);
