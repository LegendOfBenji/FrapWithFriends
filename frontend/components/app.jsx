import React from 'react';
import NavbarContainer from './navbar/navbar_container'
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';

class App extends React.Component {
  render(){
    return (
    <div>
      <header className="nav-header">
        <NavbarContainer />
      </header>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
    </div>
    )
  }
}

export default App;