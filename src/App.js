import React from 'react';
import styles from './App.module.css';
import Sidebar from './components/Sidebar/Sidebar';
import ContentContainer from "./components/Content/ContentContainer";

const App = () => {
    return (
        <div className={styles.container}>
            <Sidebar/>
            <ContentContainer/>
        </div>
    );
}

export default App;