import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/orders">Orders</a>
                <a href="?Inventory">Inventory</a>
                <a href="?about">About</a>
            </div>
        </div>
    );
};

export default Header;