import React from 'react';
import play from '../assets/logoplay.png'
import apple from '../assets/app-store.png'
import hero from '../assets/hero.png'

const Banner = () => {
    return (
        <div>
            <div>
                <div>
                    <h3 className='text-7xl font-bold text-center mt-[40px] md:mt-[60px] lg:mt-[90px]'>We Build <br />
                        <span className='text-purple-600'>Productive</span> Apps</h3>
                    <p className='text-center my-6 mx-4 md:mx-7  lg:mx-0 text-[20px] text-gray-700'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
            </div>
            <div className='flex justify-center gap-4  items-center my-8 overflow-hidden'>
                <div className='flex gap-2.5 items-center border border-gray-300 p-4 rounded-2xl'>
                    <img className='h-10' src={play} alt="" />
                    <p className='font-bold text-xl'>Google Play</p>
                </div>
                <div className='flex gap-2.5 items-center border border-gray-300 p-4 rounded-2xl'>
                    <img className='h-10' src={apple} alt="" />
                    <p className='font-bold text-xl'>App Store</p>
                </div>
            </div>

            <div className='bg-[#F5F5F5] flex justify-center items-center px-5 lg:px-0'>
                <img src={hero} alt="" />
            </div>
 
            <div className=" w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center py-12 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10">
                    Trusted By Millions, Built For You
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    {/* Total Downloads */}
                    <div>
                        <p className="text-4xl font-bold">29.6M</p>
                        <p className="text-sm mt-2">21% More Than Last Month</p>
                        <p className="text-sm mt-1 text-gray-200">Total Downloads</p>
                    </div>

                    {/* Total Reviews */}
                    <div>
                        <p className="text-4xl font-bold">906K</p>
                        <p className="text-sm mt-2">46% More Than Last Month</p>
                        <p className="text-sm mt-1 text-gray-200">Total Reviews</p>
                    </div>

                    {/* Active Apps */}
                    <div>
                        <p className="text-4xl font-bold">132+</p>
                        <p className="text-sm mt-2">31 More Will Launch</p>
                        <p className="text-sm mt-1 text-gray-200">Active Apps</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;