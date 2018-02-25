import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    app: ( state = 'hello', action) => {
       switch (action.type) {
           default: {
               return state;
           }
       }
    }
});

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
