import React from 'react';
import styles from './Nav.module.css';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link className={styles.link} to='/dialog/user-1'>
                        <span className={styles.avatar}><img src="https://images.unsplash.com/photo-1610824587411-dfcc85fea47a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybCUyMGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/></span>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.link} to='/dialog/user-2'>
                        <span className={styles.avatar}><img src="https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwbWVuJTIwZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/></span>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.link} to='/dialog/user-3'>
                        <span className={styles.avatar}><img src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fGdpcmwlMjBmYWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/></span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;