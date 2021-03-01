import React from 'react';
import styles from './Sidebar.module.css';
import Nav from './Nav/Nav';

const Sidebar = (props) => {
    return (
        <aside className={styles.sidebar}>
            <Nav users={props.users}/>
        </aside>
    );
}

export default Sidebar;