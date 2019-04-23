import {createStore, combineReducers, compose} from 'redux';
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
    places:placesReducer
});

let composeEnhacer = compose;

if (__DEV__) {
    composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhacer());
};

export default configureStore;