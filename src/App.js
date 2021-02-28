import React from 'react';
import styles from './App.module.css';
import Dialog from './components/Dialog/Dialog';
import Sidebar from './components/Sidebar/Sidebar';
import {Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <div className={styles.container}>
            <Sidebar/>
            <div className={styles.content}>
                <Switch>
                    <Route path='/dialog/user-1'>
                        <Dialog text={'Text from props 1'}/>
                    </Route>
                    <Route path='/dialog/user-2'>
                        <Dialog text={'Text from props 2'}/>
                    </Route>
                    <Route path='/dialog/user-3'>
                        <Dialog text={'Text from props 3'}/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;