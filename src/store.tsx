import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StoreState } from './app/states/app.state';
import { enthusiasm } from './app/reducers/app.reducer';
import { Reducer } from 'redux';

const rootReducer: Reducer<StoreState> = combineReducers ({
    enthusiasm: enthusiasm 
});

export default createStore<StoreState>(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
