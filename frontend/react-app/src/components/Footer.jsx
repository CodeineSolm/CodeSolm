import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4 text-white text-center">
            <p>&copy; {new Date().getFullYear()} Code Solm. All rights reserved.</p>
        </footer>
    );
};

export default Footer;