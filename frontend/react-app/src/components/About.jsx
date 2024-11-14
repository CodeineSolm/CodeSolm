import React from 'react';
import useTitle from '../../useTitle';

const About = () => {
    useTitle("About - Code Solm");
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">About Us</h1>
            <p>This is the about page.</p>
        </div>
    );
};

export default About;