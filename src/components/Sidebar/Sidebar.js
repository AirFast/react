import React from 'react';
import styles from './Sidebar.module.css';
import NavContainer from './Nav/NavContainer';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <NavContainer/>
        </aside>
    );
}

export default Sidebar;