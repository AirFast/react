import React from 'react';
import styles from './Dialogs.module.css';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import axios from 'axios';

const url = process.env.REACT_APP_DATABASE_URL;

class Dialogs extends React.Component {
    componentDidMount() {
        axios.get(url + '/dialogs.json').then(response => {
            this.props.setDialogs(response.data);
        });
        // axios.post(url + '/dialogs.json', {
        //     user: {
        //             id: 2,
        //             online: true,
        //             img: 'https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwbWVuJTIwZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        //             name: 'David Hellhake',
        //         },
        //     messages: [
        //         {
        //             with: true,
        //             time: '8:55',
        //             text: 'Cool, bro!'
        //         },
        //         {
        //             with: true,
        //             time: '8:55',
        //             text: 'See you tomorrow. I\'ll pick up the tool...'
        //         },
        //         {
        //             with: false,
        //             time: '9:05',
        //             text: 'Ok bro, I\'m waiting'
        //         },
        //     ],
        //     stateMessage: '',
        // });
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