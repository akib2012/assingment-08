import React from 'react';
import dowlodedimg from '../assets/icon-downloads.png';
import ratingimg from '../assets/icon-ratings.png'

const Installappcard = ({card, deletdata}) => {

    return (
        <div className='mt-5   px-5 py-3 bg-white shadow-2xl rounded-xl'>
            <div className='flex flex-col lg:flex-row justify-between items-center mt-4'>
                <div className='flex flex-col md:flex-row justify-around items-center gap-12'>
                    <img src={card.image} alt="" className='h-30 w-30 rounded-2xl ' />
                    <div >
                        <p className='text-2xl font-semibold'>{card.title}</p>
                        <div className='flex justify-around gap-6 items-center mt-6'>
                            <p className='flex justify-around items-center gap-3 text-[#00D390] font-bold'><img src={dowlodedimg} alt="" className='w-5 h-5' /><span>{card.downloads}MB</span></p>
                            <p className='flex justify-around items-center gap-3 text-yellow-500 font-bold'> <img src={ratingimg} alt="" className='w-5 h-5' />{card.ratingAvg}</p>
                            <p className='font-bold'>{card.size} MB</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5 md:mt-0'>
                    <button onClick={() => deletdata(card.id)} className='btn bg-[#00D390] text-white font-bold'>Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default Installappcard;