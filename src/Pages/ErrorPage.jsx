import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-base-100 text-base-content transition-colors duration-300 px-4">

            <img
                src="/App-Error.png"
                alt="Error"
                className="max-w-md mb-6 transition-all duration-300 dark:invert"
            />

            <h1 className="text-[48px] font-bold text-center mb-2">Oops, page not found!</h1>
            <p className="text-[20px] text-center pb-6 text-base-content/80">
                The page you are looking for is not available. <br />Thanks
            </p>

            <Link
                to="/"
                className="btn bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white font-semibold w-[145px] h-[45px] hover:scale-105 transition ease-in-out flex items-center justify-center"
            >
                Go Back!
            </Link>
        </div>
    );
};

export default ErrorPage;
