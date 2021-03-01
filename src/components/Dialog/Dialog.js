import React from 'react';
import styles from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';

const Dialog = (props) => {
    return (
        <article className={styles.article}>
            {props.user.name}
            {props.user.messages && props.user.messages.map((message, index) => <DialogItem message={message} key={index}/>)}
        </article>
    );
}

export default Dialog;