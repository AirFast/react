import React from 'react';
import styles from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <article className={styles.post}>{props.text}</article>
    );
}

export default Dialog;