import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <>
            <nav>
                <Link to="/" className="navLink">Home</Link>
                <Link to="/one-card-spread" className="navLink">One Card</Link>
                <Link to="/three-card-spread" className="navLink">Three Card</Link>
                <Link to="/five-card-spread" className="navLink">Five Card</Link>
            </nav>
        </>
    );
}

export default Nav;