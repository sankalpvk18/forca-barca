import React from 'react';
import logo from '../assets/barca.png';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <img className="m-5" src={logo} width="100px" height="100px"/>
            <h2 className="text-4xl font-bold mb-4">Welcome to ForçaBarça!</h2>
            <p className="text-lg mb-8">Your ultimate hub for FC Barcelona statistics, comparisons, and insights.</p>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                Get Started
            </button>
        </div>
    );
}

export default Home;