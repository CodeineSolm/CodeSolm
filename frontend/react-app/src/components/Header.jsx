import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-500 p-4 text-white">
            <h1 className="text-lg font-bold">My Application</h1>
            <nav>
            <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;