import React from 'react';
import styles from './App.module.css';
import Post from './components/Post/Post';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>
                <Post text={'Text from props'} />
            </div>
        </div>
    );
}

export default App;