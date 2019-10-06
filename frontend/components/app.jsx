import React from 'react';
import NavbarContainer from './navbar/navbar_container'
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SearchIndexContainer from './event/search_index_container';
import SplashPage from './splash_page';
import FooterPage from './footer_page';

class App extends React.Component {
  render(){
    return (
    <div className="wrapper">
      <header className="nav-header">
        <NavbarContainer />
      </header>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/fraptimes" component={SearchIndexContainer} />
        <Route exact path="/" component={SplashPage} />

        <FooterPage />
    </div>
    )
  }
}

export default App;