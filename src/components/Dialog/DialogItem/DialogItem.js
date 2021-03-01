import React from 'react';
import styles from './DialogItem.module.css'

const DialogItem = (props) => {
    return (
        <div className={styles.message}>
            <p className={styles.text}>{props.message.text}</p>
        </div>
    );
}

export default DialogItem;