import React from 'react';
import styles from './NavItem.module.css';
import {NavLink} from 'react-router-dom';

const NavItem = (props) => {
    return (
        <li className={styles.item}>
            <NavLink to={'/dialog/' + props.dialog.id} activeClassName={styles.active}>
                        <span className={styles.avatar}>
                            {props.dialog.user.online && <span className={styles.online}></span>}
                            <img src={props.dialog.user.img} alt=""/>
                        </span>
                <span className={styles.name}>{props.dialog.user.name}</span>
            </NavLink>
        </li>
    );
}

export default NavItem;