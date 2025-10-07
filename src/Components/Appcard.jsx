import React from 'react';
import { Link } from 'react-router';

const Appcard = ({apps}) => {
    return (
        <div>
            <Link to={`/appdetils/${apps.id}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-shadow translate-0.5 h-105 border border-gray-400">
                    <div className='rounded-2xl'>
                        <img src={apps.image} alt="Card Image" class="w-80  h-80 p-10" />
                    </div>
                    <div className="p-4 ">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{apps.title}</h3>
                        <div className="flex justify-between items-center ">
                            <span className="text-sm text-green-600 font-medium"><i class="fa-solid fa-download"></i> {apps.downloads}</span>
                            <span className="text-sm px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md">★ {apps.ratingAvg}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Appcard;