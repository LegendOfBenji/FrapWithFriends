import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container'

class App extends React.Component {
  render(){
    return (
    <div>
      <header className="nav-header">
        <Link to='/'>FrapWithFriends</Link>
        <NavbarContainer />
      </header>
    </div>
    )
  }
}

export default App;