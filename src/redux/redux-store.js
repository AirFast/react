import {combineReducers, createStore} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import dialogs from './dialogs';

let reducers = combineReducers({
    firebase: firebaseReducer,
    dialogs,
});

const store = createStore(reducers);

export default store;