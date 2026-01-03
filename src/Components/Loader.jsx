import React from 'react';

const Loader = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-green-50 dark:bg-base-200 transition-colors duration-300">
            <img
                className="animate-spin w-40 filter dark:brightness-150"
                src="/logo.png"
                alt="logo icon loading"
            />
        </div>
    );
};

export default Loader;
