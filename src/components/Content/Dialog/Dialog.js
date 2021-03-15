import React from 'react';
import styles from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import axios from 'axios';

const url = process.env.REACT_APP_DATABASE_URL;

const Dialog = (props) => {
    const onChangeHandler = (e) => {
        props.changeMessage(props.dialog.id, e.target.value);
    }

    const onClickHandler = () => {
        // let today = new Date(),
        //     hours = today.getHours() >= 10 ? today.getHours() : '0' + today.getHours(),
        //     minutes = today.getMinutes() >= 10 ? today.getMinutes() : '0' + today.getMinutes();
        // let time = hours + ':' + minutes;
        // axios.post(url + '/dialogs/' + props.dialog.id + '/messages.json', {
        //     with: false,
        //     time: time,
        //     text: props.dialog.stateMessage
        // });
        props.addMessage(props.dialog.id);
    }

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <h1>{props.dialog.user.name}</h1>
                <h1>{/*props.auth[0].name*/}</h1>
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