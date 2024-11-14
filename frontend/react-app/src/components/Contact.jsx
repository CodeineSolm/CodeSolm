import React from 'react';
import useTitle from '../../useTitle';

const Contact = () => {
    useTitle("Contact - Code Solm");
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Contact</h1>
            <p>This is the contact page.</p>
        </div>
    );
};

export default Contact;