import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import dialogs from './dialogs';

let reducers = combineReducers({
    dialogs,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;