import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, logout }) => {
    const sessionBar = () => (
        <>
        <div className="frapwithfriends">
            <img className="frap-logo" src={window.frapLogo} />
            <Link to='/'>Frap With Friends</Link>
        </div>
        <nav className="login-signup">
            <Link to="/fraptimes">Frap Times</Link>
            <Link to='/hosting'>Hosting</Link>
            <Link to='/about'>About</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </nav> 
        </>
    )

    const logoutBar = () => (
        <>
        <div className="frapwithfriends"> 
        <Link to='/'><img className="frap-logo" src={window.frapLogo} /></Link>
        <Link to='/'>Frap With Friends</Link>
        </div>
        <nav className="signout">
            <Link to='/fraptimes'>Frap Times</Link>
            <Link to='/hosting'>Hosting</Link>
            <Link to='/profile'>Profile</Link>
            <a className="header-button" onClick={logout}>Log Out</a>
        </nav>
        </>
    )

    return user ? logoutBar() : sessionBar()
}


export default Navbar;