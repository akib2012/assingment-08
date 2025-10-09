import React, { useState, useEffect } from 'react';
import { useDataloader } from '../Hooks/usedataloader';
import Appcard from '../Components/Appcard';
import { RiseLoader } from 'react-spinners';

const Allapps = () => {
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const { fetchdata, loading } = useDataloader();

  const handlesearch = (e) => {
    setSearch(e.target.value);
    setSearchLoading(true);
  };

  const searchdata = search.trim().replace(/\s+/g, '').toLocaleLowerCase();

  useEffect(() => {
    if (searchLoading) {
      const timer = setTimeout(() => setSearchLoading(false), 400);
      return () => clearTimeout(timer);
    }
  }, [searchLoading]);

  const finddata = searchdata
    ? fetchdata.filter((app) =>
        app.title.toLocaleLowerCase().includes(searchdata)
      )
    : fetchdata;

  return (
    <div className="max-w-10/12 mx-auto">
    
      {loading ? (
        <div className="flex justify-center items-center mt-16">
          <RiseLoader color="#db47bf" margin={5} size={25} speedMultiplier={1} />
        </div>
      ) : (
        <>
          <div className="my-20 text-center">
            <h2 className="text-4xl font-bold">Our All Applications</h2>
            <p className="my-6 text-[20px] text-gray-500">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>

          <div className="flex justify-between items-center mb-7">
            <div>
              <h3 className="text-xl font-bold underline">
                ({finddata.length}) Apps Found
              </h3>
            </div>
            <div>
              <label className="input shadow border border-gray-600 w-36 md:w-50 lg:w-80 flex items-center gap-2 px-2">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  value={search}
                  onChange={handlesearch}
                  type="search"
                  required
                  placeholder="Search"
                  className="outline-none bg-transparent flex-1"
                />
              </label>
            </div>
          </div>

         
          {searchLoading ? (
            <div className="flex justify-center items-center mt-10">
              <RiseLoader color="#db47bf" margin={5} size={20} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {finddata.map((apps) => (
                <Appcard key={apps.id} apps={apps} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Allapps;
