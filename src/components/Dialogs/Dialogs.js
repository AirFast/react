import React from 'react';
import styles from './Dialogs.module.css';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import axios from 'axios';

class Dialogs extends React.Component {
    componentDidMount() {
        axios.get(process.env.REACT_APP_DB_URL + '.json').then(response => (this.props.setDialogs(response.data.dialogs)));
    }

    render() {
        return (
            <div className={styles.container}>
                <Sidebar dialogs={this.props.dialogs}/>
                <Content dialogs={this.props.dialogs} changeMessage={this.props.changeMessage}
                         addMessage={this.props.addMessage}/>
            </div>
        )
    }
}

export default Dialogs;