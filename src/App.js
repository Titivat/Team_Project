import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main, Login, Register, Event } from './pages';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.MAIN} component={Main} />
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route exact path={ROUTES.REGISTER} component={Register} />
        <Route exact path={ROUTES.EVENT} component={Event} />
      </Switch>
    </Router>
  );
}

export default App;
