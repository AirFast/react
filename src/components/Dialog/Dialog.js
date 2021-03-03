import React from 'react';
import styles from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import {addMessageActionCreator, changeMessageActionCreator} from '../../redux/dialogsReducer';

const Dialog = (props) => {
    const onChangeHandler = (e) => {
        props.dispatch(changeMessageActionCreator(props.dialog.id, e.target.value));
    }

    const onClickHandler = () => {
        props.dispatch(addMessageActionCreator(props.dialog.id));
    }

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <h1>{props.dialog.user[0].name}</h1>
                <h1>{props.auth[0].name}</h1>
            </header>
            <div className={styles.dialog}>
                {props.dialog.messages && props.dialog.messages.map((message, index) => <DialogItem message={message}
                                                                                                    key={index}/>)}
            </div>
            <footer className={styles.footer}>
                <textarea className={styles.textarea} onChange={onChangeHandler}
                          value={props.dialog.stateMessage}></textarea>
                <button className={styles.button} onClick={onClickHandler}
                        disabled={!props.dialog.stateMessage.length}>+
                </button>
            </footer>
        </section>
    );
}

export default Dialog;