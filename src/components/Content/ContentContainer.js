import {connect} from 'react-redux';
import Content from './Content';
import {addMessageActionCreator, changeMessageActionCreator} from '../../redux/dialogs';

let mapStateToProps = state => ({dialogs: state.dialogs});

let mapDispatchToProps = dispatch => ({
    changeMessage: (id, message) => {
        dispatch(changeMessageActionCreator(id, message));
    },
    addMessage: id => {
        dispatch(addMessageActionCreator(id));
    }
});

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer;