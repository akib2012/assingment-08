import React from 'react';
import errorimg from '../assets/error-404.png'
import { Link } from 'lucide-react';
import { NavLink } from 'react-router';

const Errorpage = () => {
    return (
        <div>
            <div>
                <div className='flex justify-center items-center mt-7'>
                    <img src={errorimg} alt="" />
                </div>
                <div>
                    <div className='text-center mt-6'>
                        <h3 className='text-4xl font-semibold'>Oops, page not found!</h3>
                        <p className='py-5 text-gray-400'>The page you are looking for is not available.</p>
                    </div>
                    <NavLink to='/'>
                        <div className='flex justify-center items-center mt-4'>
                        <button className='btn bg-gradient-to-r from-purple-700
                         to-purple-500 text-xl text-white  py-2'>Go Back</button>
                    </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Errorpage;