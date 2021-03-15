import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import ReactReduxFirebaseProvider from 'react-redux-firebase';
import firebase from 'firebase/app';
import firebaseConfig from './config/firebaseConfig';
import {createFirestoreInstance} from 'redux-firestore';

const rrfProps = {
    firebase,
    config: firebaseConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <App/>
                </ReactReduxFirebaseProvider>
            </ Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();