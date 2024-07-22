import React from 'react';
import { Search, Tag, MapPin, Layers } from 'lucide-react';

const Hero2 = () => {
  return (
    <div id="hero-area" className="relative bg-yellow-50 text-white py-20 " style={{ backgroundImage: "url('/house2.jpg')" }}>
      <div className="absolute inset-0 bg-yellow-50 opacity-50"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex justify-center text-center">
          <div className="w-full max-w-4xl text-gray-800">
            <h1 className=" text-2xl sm:text-4xl font-bold mb-4">
            Your One-Stop Platform for Property in <span className="text-yellow-500"> {" "} Zimbabwe </span> 
            </h1>
            <p className="text-lg mb-8">
            Buy, sell, rent and more. 
              <br />
              {/* Or Search For Property More */}
            </p>
            <div className="bg-[#f9f9f9] p-6 rounded-lg shadow-lg">
              <form className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow text-gray-700">
                  <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900" />
                  <input
                    type="text"
                    name="customword"
                    className="w-full pl-10 py-4 border border-gray-200 rounded-lg"
                    placeholder="Type Location"
                  />
                </div>
                {/* <div className="relative flex-grow">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900" />
                  <select className="w-full pl-10 py-2 border border-gray-300 rounded-lg">
                    <option value="none">All Locations</option>
                    <option value="new-york">New York</option>
                    <option value="california">California</option>
                    <option value="washington">Washington</option>
                    <option value="birmingham">Birmingham</option>
                    <option value="chicago">Chicago</option>
                    <option value="phoenix">Phoenix</option>
                  </select>
                </div> */}
                <div className="relative flex-grow text-gray-700 ">
                  <Layers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 " />
                  <select className="w-full pl-10 py-4 border border-gray-200 rounded-lg">
                    <option value="none">Select Rent, Sell or Buy</option>
                    <option value="mobiles">Rent</option>
                    <option value="electronics">Buy</option>
                    <option value="training">Sell</option>
                    {/* <option value="real-estate">Real Estate</option>
                    <option value="services">Services</option>
                    <option value="vehicles">Vehicles</option> */}
                  </select>
                </div>
                <button
                  type="button"
                  className="w-full md:w-auto py-3 px-5 leading-5 text-sm bg-yellow-500 hover:bg-yellow-600 text-gray-800 rounded-lg flex items-center justify-center"
                >
                  <Search className="mr-2" /> Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
