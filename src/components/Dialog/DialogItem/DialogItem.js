import React from 'react';
import styles from './DialogItem.module.css'

const DialogItem = (props) => {

    let addClass = props.message.with ? styles.with : styles.from;

    return (
        <div className={styles.message + ' ' + addClass}>
            <p className={styles.text}>{props.message.text}<span className={styles.time}>{props.message.time}</span></p>
        </div>
    );
}

export default DialogItem;