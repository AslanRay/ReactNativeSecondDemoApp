import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
    places:placesReducer
});

let composeEnhacer = compose;

if (__DEV__) {
    composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhacer(applyMiddleware(thunk)));
};

export default configureStore;