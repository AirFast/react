import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import dialogs from './dialogs';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import firebaseConfig from '../config/firebaseConfig';
import firebase from 'firebase/app';

let reducers = combineReducers({
    dialogs,
});

const store = createStore(reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(firebase, firebaseConfig),
        reduxFirestore(firebase),
    )
);

export default store;