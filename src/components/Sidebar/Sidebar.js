import React from 'react';
import styles from './Sidebar.module.css';
import Nav from './Nav/Nav';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <Nav/>
        </aside>
    );
}

export default Sidebar;