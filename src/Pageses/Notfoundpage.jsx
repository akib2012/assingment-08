import React from 'react';
import notfoundimg from '../assets/App-Error.png'
import { NavLink } from 'react-router';

const Notfoundpage = () => {
    return (
        <div>
            <div>
                <div className='flex justify-center items-center mt-7'>
                    <img src={notfoundimg} alt="" />
                </div>
                <div>
                    <div className='text-center mt-6'>
                        <h3 className='text-4xl font-semibold'>OPPS!! APP NOT FOUND</h3>
                        <p className='py-5 text-gray-400'>The App you are requesting is not found on our system.  please try another apps</p>
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

export default Notfoundpage;