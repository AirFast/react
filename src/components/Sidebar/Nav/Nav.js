import React from 'react';
import styles from './Nav.module.css';
import NavItem from './NavItem/NavItem';

const Nav = (props) => {
    return (
        <nav>
            <ul className={styles.list}>
                {props.dialogs.map(dialog => <NavItem dialog={dialog} key={dialog.id}/>)}
            </ul>
        </nav>
    );
}

export default Nav;