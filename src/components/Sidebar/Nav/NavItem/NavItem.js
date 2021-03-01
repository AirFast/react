import React from 'react';
import styles from './NavItem.module.css';
import {NavLink} from 'react-router-dom';

const NavItem = (props) => {
    return (
        <li className={styles.item}>
            <NavLink to={'/dialog/user/' + props.user.id} activeClassName={styles.active}>
                        <span className={styles.avatar}>
                            {props.user.online && <span className={styles.online}></span>}
                            <img src={props.user.img} alt=""/>
                        </span>
                <span className={styles.name}>{props.user.name}</span>
            </NavLink>
        </li>
    );
}

export default NavItem;