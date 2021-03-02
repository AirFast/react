import React from 'react';
import styles from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';

const Dialog = (props) => {
    const onChangeHandler = (e) => {
        let message = e.target.value;
        console.log(message);
    }

    const onClickHandler = () => {
        console.log('click');
    }

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <h1>{props.dialog.user[0].name}</h1>
                <h1>{props.auth[0].name}</h1>
            </header>
            {props.dialog.messages && props.dialog.messages.map((message, index) => <DialogItem message={message} key={index}/>)}
            <footer className={styles.footer}>
                <textarea className={styles.textarea} onChange={ onChangeHandler }></textarea>
                <button className={styles.button} onClick={ onClickHandler }>+</button>
            </footer>
        </section>
    );
}

export default Dialog;