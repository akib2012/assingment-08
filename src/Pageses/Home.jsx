import React from 'react';
import Banner from '../Components/Banner';
import Homeapps from '../Components/Homeapps';

import { RiseLoader } from 'react-spinners';
import { useDataloader } from '../Hooks/usedataloader';


const Home = () => {
    const {loading} = useDataloader();
    if (loading) {
        return (
            <div className='flex justify-center items-center mt-16'>
                <RiseLoader
                    color="#db47bf"
                    margin={5}
                    size={25}
                    speedMultiplier={1}
                />
            </div>
        )
    }

    
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Homeapps></Homeapps>
            </div>

        </div>
    );
};

export default Home;