import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
  // Import app styles for styling the navigation bar and links.

const Navbar = () => {
    return (
        
        <nav>
            <h1>My E-Commerce</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/about">About</Link></li> 
            </ul>
        </nav>
        
    );
};

export default Navbar;
