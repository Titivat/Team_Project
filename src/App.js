import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Event, Login, Register } from './pages';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.EVENT} component={Event} />
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route exact path={ROUTES.REGISTER} component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
