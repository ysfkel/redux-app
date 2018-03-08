import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StoreStateType } from './app/states/app.state';
// import { autoReducers } from './app/auto/placead/reducer';
import { appReducer } from './app/reducers/app.reducer';

export default createStore<StoreStateType>(
    appReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
