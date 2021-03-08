import {connect} from 'react-redux';
import Dialogs from './Dialogs';
import {addMessage, changeMessage, setDialogs} from '../../redux/dialogs';

let mapStateToProps = state => ({dialogs: state.dialogs});

const DialogsContainer = connect(mapStateToProps, {changeMessage, addMessage, setDialogs,})(Dialogs);

export default DialogsContainer;