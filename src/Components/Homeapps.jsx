import React from 'react';
import { useDataloader } from '../Hooks/usedataloader';
import Apps from './Apps';
import { Link } from 'react-router';
import Allapps from '../Pageses/Allapps';


const Homeapps = () => {

    const { fetchdata, error, loading } = useDataloader();

    const homefetchdata = fetchdata.slice(0, 8)
    return (
        <div className='max-w-10/12 mx-auto '>
            <div className='text-center my-13'>
                <div>
                    <h3 className='text-5xl font-bold'>Trending Apps </h3>
                    <p className='text-gray-600 mt-5 text-[20px]'>Explore All Trending Apps on the Market developed by us</p>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    homefetchdata.map(app => <Apps key={homefetchdata.id} app={app}></Apps>)
                    
                }
                
            </div>



            <div className='flex justify-center items-center my-9'>
               <Link to='/allapps'>
                    <div>
                        <button className='btn bg-gradient-to-r from-purple-700
                         to-purple-500 text-xl text-white  py-2'>Show All</button>

                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Homeapps;