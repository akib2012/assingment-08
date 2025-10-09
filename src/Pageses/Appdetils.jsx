import React, { useState, useEffect } from 'react';
import { useDataloader } from '../Hooks/usedataloader';
import { Navigate, useParams } from 'react-router';
import dowimg from '../assets/icon-downloads.png';
import raating from '../assets/icon-ratings.png';
import review from '../assets/icon-review.png';
import { handledetailsset } from '../Localstorage/Localstorage';
import Ratingchart from '../Components/Ratingchart';

const Appdetils = () => {
  const [btnchange, setBtnchange] = useState(false);
  const { id } = useParams();
  const { fetchdata, loading } = useDataloader();

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || {};
    if (installedApps[id]) {
      setBtnchange(true);
    }
  }, [id]);

  if (loading) {
    return <p>loading ........</p>;
  }

  const card = fetchdata.find(crd => String(crd.id) === id);

  if (!card) {
    return <Navigate to="/errorelemet" replace />;
  }

  const rating = card.ratings;

  const handleInstall = () => {
    handledetailsset(card);
    setBtnchange(true);

    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || {};
    installedApps[id] = true;
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
  };

  return (
    <div className="bg-[#F5F5F5] -mb-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row pl-11 gap-20 mt-9 py-7 items-center shadow-2xl">
          <div>
            <img src={card.image} alt={card.title} />
          </div>
          <div>
            <h3 className="text-4xl font-bold">{card.title}</h3>
            <p className="text-xl text-gray-500">
              Developed by <span className="text-purple-800">{card.companyName}</span>
            </p>

            <div className="w-fit lg:w-[1000px] mt-4">
              <hr />
            </div>

            <div className="flex my-6 space-y-4 gap-4">
              <div>
                <img src={dowimg} alt="" />
                <h3 className="py-4">Downloads</h3>
                <p className="text-xl md:text font-bold">{card.downloads}M</p>
              </div>
              <div>
                <img src={raating} alt="" />
                <h3 className="py-4 text-wrap px-2 md:px-0.5">Average Ratings</h3>
                <p className="text-xl md:text font-bold">{card.ratingAvg}</p>
              </div>
              <div>
                <img src={review} alt="" />
                <h3 className="py-4">Total Reviews</h3>
                <p className="text-xl md:text-3xl font-bold">{card.reviews}</p>
              </div>
            </div>

            {/* ✅ Updated Install Button */}
            <div
              className={`w-55 py-4 px-4 rounded-xl font-bold transition duration-300 ${
                btnchange
                  ? "bg-gray-400 text-white text-2xl font-bold cursor-not-allowed"
                  : "bg-[#00D390] text-white hover:-translate-y-1 active:scale-95 cursor-pointer"
              }`}
              onClick={!btnchange ? handleInstall : undefined} // disable click when installed
            >
              <button>
                {btnchange ? "Installed" : `Install Now (${card.size}) MB`}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 text-gray-400">
          <hr />
        </div>

        <div className="mt-12">
          <Ratingchart rating={rating}></Ratingchart>
        </div>

        <div className="mt-10 text-gray-400">
          <hr />
        </div>

        <div className="mt-6 mx-6 md:mx-0">
          <h3 className="text-2xl font-semibold">Description</h3>
          <div className="mb-11 pb-8 pt-4 text-gray-400 text-justify">
            {card.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appdetils;
