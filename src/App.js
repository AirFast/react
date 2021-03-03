import React from 'react';
import styles from './App.module.css';
import Dialog from './components/Dialog/Dialog';
import Sidebar from './components/Sidebar/Sidebar';
import {Route} from 'react-router-dom';

const App = (props) => {
    return (
        <div className={styles.container}>
            <Sidebar dialogs={props.state.dialogs}/>
            <div className={styles.content}>
                {props.state.dialogs.map(dialog => <Route path={'/dialog/' + dialog.id} key={dialog.id} render={() => <Dialog dialog={dialog} auth={props.state.auth} changeMessage={props.changeMessage} addMessage={props.addMessage}/>}/>)}
            </div>
        </div>
    );
}

export default App;