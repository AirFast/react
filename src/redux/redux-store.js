import {combineReducers, createStore} from 'redux';
import dialogs from './dialogs';

let reducers = combineReducers({
    dialogs,
});

const store = createStore(reducers);

export default store;