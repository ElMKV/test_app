import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Employers from '../../pages/Employers/Employers';
import Tasks from '../../pages/Tasks/Tasks';
import Header from '../Header/Header';

const App = () => {
  
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Employers />
        </Route>
        <Route exact path="/tasks">
          <Tasks />

        </Route>
      </Switch>
    </Router>
  );
};

export default App;