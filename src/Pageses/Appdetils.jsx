import React, { useState } from 'react';
import { useDataloader } from '../Hooks/usedataloader';
import { useParams } from 'react-router';
import dowimg from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'
import { handledetailsset } from '../Localstorage/Localstorage';

const Appdetils = () => {
    const [btnchange, setBtnchange] = useState(false);

    const { id } = useParams();

    const { fetchdata, loading } = useDataloader();

    if (loading) {
        return <p>loading ........</p>
    }
    const card = fetchdata.find(crd => String(crd.id) === id) || {}



    return (
        <div className='flex flex-col md:flex-row pl-11 gap-20 mt-9 py-7 max-w-[1400px] mx-auto items-center  shadow-2xl'>
            <div>
                <img src={card.image} alt="" />

            </div>
            <div>
                <h3 className=' text-4xl font-bold'>SmPlan:ToDo List with Reminder</h3>
                <p className='text-xl text-gray-500'>Developed by <span className='text-purple-800'> productive.io</span></p>
                <div className=' w-fit lg:w-[1000px] mt-4'>
                    <hr />
                </div>
                <div className='flex my-6 space-y-4 gap-4 '>
                    <div>
                        <img src={dowimg} alt="" />
                        <h3 className='py-4'>Downloads</h3>
                        <p className='text-3xl font-bold'>8M</p>
                    </div>
                    <div >
                        <img src={rating} alt="" />
                        <h3 className='py-4'>Average Ratings</h3>
                        <p className='text-3xl font-bold'>4.9</p>
                    </div>
                    <div>
                        <img src={review} alt="" />
                        <h3 className='py-4'>Total Reviews</h3>
                        <p className='text-3xl font-bold'>54K</p>
                    </div>
                </div>
                <div

                   onClick={() => {handledetailsset(card); !btnchange && setBtnchange(true) }}

                    className={`w-55 py-4 px-4 rounded-xl font-bold transition duration-300 ${btnchange
                            ? "bg-gray-400 text-white text-2xl font-bold cursor-not-allowed"
                            : "bg-[#00D390] text-white hover:-translate-y-1 active:scale-95 cursor-pointer"
                        }`}
                >
                    <button disabled={btnchange}>
                        {btnchange ? "Installed" : "Install Now (291 MB)"}
                    </button>
                </div>



            </div>
        </div>

    );
};

export default Appdetils;