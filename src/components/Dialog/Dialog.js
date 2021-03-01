import React from 'react';
import styles from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';

const Dialog = (props) => {
    return (
        <article className={styles.article}>
            <header className={styles.header}>
                <h1>{props.dialog.user[0].name}</h1>
                <h1>{props.auth[0].name}</h1>
            </header>
            {props.dialog.messages && props.dialog.messages.map((message, index) => <DialogItem message={message} key={index}/>)}
        </article>
    );
}

export default Dialog;