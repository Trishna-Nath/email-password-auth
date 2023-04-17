import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">register</Link>
            <Link to="/reactboots">ReactBoots</Link>
            <Link to="/reactbootstrap">ReactBootstrap</Link>
        </nav>
    );
};

export default Header;