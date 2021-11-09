import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/layout/Home';
import Login from './components/auth/Login';
import Admin from './components/layout/Admin';
import PrivateRoute from './components/routing/PrivateRoute';

import MessageState from './context/message/MessageState';
import AuthState from './context/auth/AuthState';

import './App.css';

function App() {
  return (
    <AuthState>
      <MessageState>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/admin' component={Admin} />
          </Switch>
        </Router>
      </MessageState>
    </AuthState>
  );
}

export default App;
