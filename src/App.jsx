import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import { AuthProvider } from './Auth';
import { Home, SignIn, SignUp } from './pages';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <CssBaseline />
      <Router>
        <Switch>
          <PrivateRoute component={Home} exact path="/" />
          <Route component={SignIn} path="/sign-in" />
          <Route component={SignUp} path="/sign-up" />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
