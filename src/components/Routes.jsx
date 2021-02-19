import { React, PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateCompte from './CreateCompte';
import Signin from './Signin';

class Routes extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/signup" component={CreateCompte} />
        <Route exact path="/signin" component={Signin} />
      </Switch>
    );
  }
} export default Routes;
