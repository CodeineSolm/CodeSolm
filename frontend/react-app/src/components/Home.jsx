import React from 'react';
import useTitle from '../../useTitle';

const Home = () => {
    useTitle("Code Solm");
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Welcome to My Application!</h1>
            <p>This is the main page.</p>
        </div>
    );
};

export default Home;