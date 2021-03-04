import styles from './App.module.css';
import Dialog from './components/Dialog/Dialog';
import Sidebar from './components/Sidebar/Sidebar';
import {Route} from 'react-router-dom';

const App = (props) => {
  return (
      <div className={styles.container}>
        <Sidebar/>
        <div className={styles.content}>
          {props.state.dialogs.map(dialog => <Route path={'/dialog/' + dialog.id} key={dialog.id} render={() => <Dialog dialog={dialog} auth={props.state.auth} dispatch={props.dispatch}/>}/>)}
        </div>
      </div>
  );
}

export default App;