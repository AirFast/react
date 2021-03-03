import React from 'react';
import styles from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';

const Dialog = (props) => {
    const onChangeHandler = (e) => {
        props.dispatch({type: 'CHANGE-MESSAGE', id: props.dialog.id, message: e.target.value});
    }

    const onClickHandler = () => {
        props.dispatch({type: 'ADD-MESSAGE', id: props.dialog.id});
        props.dialog.stateMessage = '';
    }

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <h1>{props.dialog.user[0].name}</h1>
                <h1>{props.auth[0].name}</h1>
            </header>
            <div className={styles.dialog}>
                {props.dialog.messages && props.dialog.messages.map((message, index) => <DialogItem message={message} key={index}/>)}
            </div>
            <footer className={styles.footer}>
                <textarea className={styles.textarea} onChange={ onChangeHandler } value={props.dialog.stateMessage}></textarea>
                <button className={styles.button} onClick={ onClickHandler } disabled={!props.dialog.stateMessage.length}>+</button>
            </footer>
        </section>
    );
}

export default Dialog;