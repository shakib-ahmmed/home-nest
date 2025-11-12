import React from 'react';
import img from './public/App-Error.png'
import { Link } from 'react-router';



const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <img src={img} alt="App-Error.png" />
            <h1 className='text-black text-[48px]  text-center'>Oops, page not found!</h1>
            <p className='text-[20px] text-center pb-3'>The page you are looking for is not available. <br />Thanks</p>

            <Link to={'./'}>
                <a className="btn  from-[#5a22df]  to-[#9557eb] text-white font-semibold w-[145px] h-[45px] hover:scale-105 transition ease-in-out ">
                    Go Back!</a>
            </Link>
        </div>
    )
};
export default ErrorPage;