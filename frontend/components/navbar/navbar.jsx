import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, logout }) => {
    const sessionBar = () => (
        <nav className="login-signup">
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </nav> 
    )

    const logoutBar = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {user.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    )

    return user ? logoutBar() : sessionBar()
}


export default Navbar;