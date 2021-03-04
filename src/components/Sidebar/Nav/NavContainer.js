import {connect} from 'react-redux';
import Nav from './Nav';

let mapStateToProps = state => ({dialogs: state.dialogs});

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;