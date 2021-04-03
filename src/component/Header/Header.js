import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>Book Gallery</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/order">Orders</a>
                <a href="/admin">Admin</a>
                <a href="/deals">Deals</a>
                <a href="/login"><button className='btn btn-info'>Log In</button></a>
            </nav>
        </div>
    );
};

export default Header;