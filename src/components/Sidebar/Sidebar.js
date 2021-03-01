import React from 'react';
import styles from './Sidebar.module.css';
import Nav from './Nav/Nav';

const Sidebar = (props) => {
    return (
        <aside className={styles.sidebar}>
            <Nav dialogs={props.dialogs}/>
        </aside>
    );
}

export default Sidebar;