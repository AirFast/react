import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let users = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1610824587411-dfcc85fea47a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybCUyMGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Sarah',
        messages: [
            {
                text: 'Hi!'
            },
            {
                text: 'How are you?'
            },
            {
                text: 'Are we going for a walk today?'
            }
        ]
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwbWVuJTIwZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'David'
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fGdpcmwlMjBmYWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Dana'
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1610271340738-726e199f0258?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fGdpcmwlMjBmYWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Hailey'
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGdpcmx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Kristina'
    },
]

ReactDOM.render(
    <BrowserRouter>
        <App users={users}/>
    </BrowserRouter>,
    document.getElementById('root')
);