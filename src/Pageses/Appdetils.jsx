import React from 'react';
import { useDataloader } from '../Hooks/usedataloader';
import { useParams } from 'react-router';

const Appdetils = () => {

    const {id} = useParams();
    
    const {fetchdata, loading} = useDataloader();
    
    if(loading){
        return <p>loading ........</p>
    }
    const card = fetchdata.find(crd => String(crd.id) === id) || {}
   


    return (
        <div className="max-w-[1400px] h-[350px] mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row mt-7">
           
            <div className="md:w-1/3 w-full h-[200px] md:h-full">
                <img
                    src={card.image}
                    alt="App Logo"
                    className="w-80 object-cover p-4 "
                />
            </div>

            
            <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
               
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        SmPlan: ToDo List With Reminder
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Developed by <span className="text-purple-600">productive.io</span>
                    </p>
                </div>

              
                <div className="flex justify-between items-center mb-4">
                    <div className="flex flex-col items-center">
                        <svg className="w-8 h-8 text-green-500 mb-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 10a1 1 0 011-1h3V3a1 1 0 112 0v6h3a1 1 0 110 2H9v6a1 1 0 11-2 0v-6H4a1 1 0 01-1-1z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-900">8M</span>
                        <span className="text-xs text-gray-500">Downloads</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <svg className="w-8 h-8 text-yellow-400 mb-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.375 2.455a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.375-2.455a1 1 0 00-1.176 0l-3.375 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.967z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-900">4.9</span>
                        <span className="text-xs text-gray-500">Average Ratings</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <svg className="w-8 h-8 text-purple-500 mb-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 5a2 2 0 012-2h10a2 2 0 012 2v2H2V5zM2 9h14v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-900">54K</span>
                        <span className="text-xs text-gray-500">Total Reviews</span>
                    </div>
                </div>

               
                <button className="w-full bg-green-500 text-white font-semibold py-3 px-4 rounded hover:bg-green-600 transition duration-300">
                    Install Now (291 MB)
                </button>
            </div>
        </div>

    );
};

export default Appdetils;