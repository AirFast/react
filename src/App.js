import React from 'react';
import styles from './App.module.css';
import CounterButton from './CounterButton';

const App = () => {
    return (
        <div className={styles.container}>
            <CounterButton />
        </div>
    );
}

export default App;