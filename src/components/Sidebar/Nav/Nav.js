import React from 'react';
import styles from './Nav.module.css';
import NavItem from './NavItem/NavItem';

const Nav = (props) => {
    return (
        <nav>
            <ul className={styles.list}>
                {props.users.map(user => <NavItem user={user} key={user.id}/>)}
            </ul>
        </nav>
    );
}

export default Nav;