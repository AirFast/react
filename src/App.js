import React from 'react';
import styles from './App.module.css';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

const App = (props) => {
    return (
        <div className={styles.container}>
            <Sidebar/>
            <Content state={props.state} dispatch={props.dispatch}/>
        </div>
    );
}

export default App;