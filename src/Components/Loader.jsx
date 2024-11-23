import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/loading.json'; 

const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <Lottie animationData={animationData} style={{ width: 200, height: 200 }} />
        </div>
    );
};

export default Loader;