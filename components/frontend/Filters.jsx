'use client'
import { useState } from 'react';
import { Search, Sliders } from 'lucide-react';

export default function Filters() {
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const toggleMoreFilters = () => {
    setShowMoreFilters(!showMoreFilters);
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg ">
   
      <form action="" method="post" className="space-y-4 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-4 items-center">
          <div className="flex-1 flex items-center space-x-2">
            <input
              type="text"
              name="location"
              required
              maxLength="50"
              placeholder="Enter Keyword"
              className="w-full p-4 border rounded"
            />
            <Search className="w-5 h-5 text-gray-500" />
          </div>
          <div className="flex-1">
            <select name="offer" className="w-full p-4 border rounded" required>
              <option value="sale">For Sale</option>
              <option value="resale">Resale</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="flex-1">
            <select name="type" className="w-full p-4 border rounded" required>
              <option value="flat">All Type</option>
              <option value="flat">Flat</option>
              <option value="house">House</option>
              <option value="shop">Shop</option>
            </select>
          </div>
          <button
            type="button"
            onClick={toggleMoreFilters}
            className="flex items-center px-4 py-4 border rounded text-gray-700 bg-gray-100 hover:bg-gray-200"
          >
            <Sliders className="w-5 h-5 mr-2" /> Filter
          </button>
          <button
            type="submit"
            className="px-4 py-4 bg-yellow-500 text-gray-700 rounded hover:bg-yellow-600"
          >
            Search
          </button>
        </div>
        {showMoreFilters && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="box">
              <p className="mb-2">How Many BHK</p>
              <select name="bhk" className="w-full p-2 border rounded" required>
                {Array.from({ length: 9 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{`${i + 1} BHK`}</option>
                ))}
              </select>
            </div>
            <div className="box">
              <p className="mb-2">Minimum Budget</p>
              <select name="minimum" className="w-full p-2 border rounded" required>
                {[5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000].map((value) => (
                  <option key={value} value={value * 100000}>{`${value} lac`}</option>
                ))}
              </select>
            </div>
            <div className="box">
              <p className="mb-2">Maximum Budget</p>
              <select name="maximum" className="w-full p-2 border rounded" required>
                {[5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000].map((value) => (
                  <option key={value} value={value * 100000}>{`${value} lac`}</option>
                ))}
              </select>
            </div>
            <div className="box">
              <p className="mb-2">Status</p>
              <select name="status" className="w-full p-2 border rounded" required>
                <option value="ready to move">Ready to Move</option>
                <option value="under construction">Under Construction</option>
              </select>
            </div>
            <div className="box">
              <p className="mb-2">Furnished</p>
              <select name="furnished" className="w-full p-2 border rounded" required>
                <option value="unfurnished">Unfurnished</option>
                <option value="furnished">Furnished</option>
                <option value="semi-furnished">Semi-Furnished</option>
              </select>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
