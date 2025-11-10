import React from 'react';
const LoadingSpinner = () => {


    return (
        <div className='h-screen flex justify-center items-center bg-gray-100'>
            <img className='animate-spin w-40' src='/logo.png' alt="logo icon loading" />
        </div>
    );
};

export default LoadingSpinner;