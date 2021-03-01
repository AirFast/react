import React from 'react';
import styles from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';

const Dialog = (props) => {
    return (
        <article className={styles.article}>
            <header className={styles.header}>
                <h1>{props.user.name}</h1>
                <h1>{props.auth[0].name}</h1>
            </header>
            <div className={styles.user}>
                {props.user.messages && props.user.messages.map((message, index) => <DialogItem message={message} key={index}/>)}
            </div>
            <div className={styles.auth}>
                {props.auth[0].messages && props.auth[0].messages.map((message, index) => <DialogItem message={message} key={index}/>)}
            </div>
        </article>
    );
}

export default Dialog;