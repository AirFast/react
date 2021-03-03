import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store';

const rerenderReactDOM = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} changeMessage={store.changeMessage.bind(store)} addMessage={store.addMessage.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );

}

rerenderReactDOM(store.getState());

store.subscribe(rerenderReactDOM);