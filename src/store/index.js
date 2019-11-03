import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer, {initialState} from './reducer';
// import visibilityFilter from './filters';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 export const store = createStore(
     reducer, initialState,
     composeEnhancer(applyMiddleware(thunk))
 );


//  const app = combineReducers({ reducer, visibilityFilter });
//  export const store = createStore(app, initialState,composeEnhancer(applyMiddleware(thunk)));
