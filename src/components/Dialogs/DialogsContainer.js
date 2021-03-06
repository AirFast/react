import {connect} from 'react-redux';
import Dialogs from './Dialogs';
import {addMessageActionCreator, changeMessageActionCreator, setDialogsActionCreator} from '../../redux/dialogs';

let mapStateToProps = state => ({dialogs: state.dialogs});

let mapDispatchToProps = dispatch => ({
    changeMessage: (id, message) => (dispatch(changeMessageActionCreator(id, message))),
    addMessage: id => (dispatch(addMessageActionCreator(id))),
    setDialogs: dialogs => (dispatch(setDialogsActionCreator(dialogs))),
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;