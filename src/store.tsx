import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StoreState } from './app/states/app.state';
import { enthusiasm } from './app/reducers/app.reducer';
import { Reducer } from 'redux';
import { autoReducer } from './app/auto/placead/auto.reducer';

const rootReducer: Reducer<StoreState> = combineReducers ({
    enthusiasm: enthusiasm,
    autoReducer:autoReducer
});

export default createStore<StoreState>(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
