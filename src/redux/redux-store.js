import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import dialogs from './dialogs';
import firebase from 'firebase/app';
import {firebaseReducer, getFirebase} from 'react-redux-firebase';
import {firestoreReducer, getFirestore, reduxFirestore} from 'redux-firestore';
import firebaseConfig from '../config/firebaseConfig';

const reducers = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    dialogs,
});

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase, firebaseConfig)
    )
);

export default store;