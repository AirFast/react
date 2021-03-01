import React from 'react';
import styles from './App.module.css';
import Dialog from './components/Dialog/Dialog';
import Sidebar from './components/Sidebar/Sidebar';
import {Route} from 'react-router-dom';

const App = (props) => {
    return (
        <div className={styles.container}>
            <Sidebar users={props.state.users}/>
            <div className={styles.content}>
                {props.state.users.map(user => <Route path={'/dialog/user/' + user.id} key={user.id} render={() => <Dialog user={user} auth={props.state.auth}/>}/>)}
            </div>
        </div>
    );
}

export default App;