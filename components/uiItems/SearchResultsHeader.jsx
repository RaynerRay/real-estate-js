// components/SearchResultsHeader.js
import React from 'react';

const SearchResultsHeader = ({ resultsCount, searchTerm }) => {
  return (
    <div className='flex justify-between my-4 '>
        <div className="">
      <h1 className="font-heading text-gray-700 text-lg sm:text-2xl font-semibold">
        Found <span className='text-gray-500'>{resultsCount} </span>listings
      </h1>
      {/* <p className="text-gray-500">{searchTerm}</p> */}
      </div>
      
      <div className="flex gap-4 flex-wrap mt-4 ">
        <select className="rounded-md border border-coolGray-200 py-3 px-4 text-coolGray-400 text-sm outline-none">
          <option value="">Sort by Newest</option>
          <option value="">Sort by Limited</option>
          <option value="">Sort by Sale</option>
        </select>
     
      </div>
    </div>
  );
};

export default SearchResultsHeader;
