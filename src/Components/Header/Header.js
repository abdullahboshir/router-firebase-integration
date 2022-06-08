import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './header.css'

const Header = () => {
    const {user, handleSingOut} = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/register">Register</Link>
                <span style={{paddingRight: "15px"}}>{user?.displayName && user.displayName}</span>
                {user?.uid? <button onClick={handleSingOut}>Sign Out</button> :
                    <Link to="/login">Login</Link>}
            </nav>
        </div>
    );
};

export default Header;