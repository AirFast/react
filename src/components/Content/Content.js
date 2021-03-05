import React from 'react';
import styles from './Content.module.css';
import {Route} from 'react-router-dom';
import Dialog from './Dialog/Dialog';

const Content = (props) => {
    return (
        <div className={styles.content}>
            { props.dialogs.map(dialog => <Route path={'/dialog/' + dialog.id} key={dialog.id} render={() => <Dialog dialog={dialog} changeMessage={props.changeMessage} addMessage={props.addMessage}/>}/>)}
        </div>
    );
}

export default Content;