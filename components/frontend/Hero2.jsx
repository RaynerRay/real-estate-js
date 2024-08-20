import React from 'react';
import { Search, Tag, MapPin, Layers } from 'lucide-react';
import SearchForm from './SearchForm';
import FilterComponent from './filter/FilterComponent';
import SearchAndFilters from './SearchAndFilters';

const Hero2 = () => {
  return (
    <div id="hero-area" className="relative bg-green-50 text-white py-20" style={{ backgroundImage: "url('/house2.jpg')",  }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex justify-center text-center">
          <div className="w-full max-w-6xl text-gray-200">
            <h1 className=" text-2xl sm:text-4xl font-bold mb-4">
            Your One-Stop Platform for Property in <span className="text-green-500"> {" "} Zimbabwe </span> 
            </h1>
            <p className="text-lg mb-8">
            Buy, sell, rent and more. 
              <br />
              {/* Or Search For Property More */}
            </p>
            <div className="p-6 rounded-lg shadow-lg">
           <SearchAndFilters />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
