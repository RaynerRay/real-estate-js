"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { LocateIcon, Search, Sliders } from "lucide-react";
import { getData } from "@/lib/getData";

export default function SearchandFilters() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const router = useRouter();
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [allLocations, setAllLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionBoxRef = useRef(null);

  // Fetch Categories, Subcategories, and Locations
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getData("categories");
        setCategories(categoriesData);

        // const subCategoriesData = await getData("subcategories");
        // setSubCategories(subCategoriesData);

        // Check if locations data exists in local storage
        const storedLocations = localStorage.getItem("allLocations");
        if (storedLocations) {
          setAllLocations(JSON.parse(storedLocations));
        } else {
          const locationsData = await getData("locations");
          const combinedLocations = [
            ...locationsData.cities,
            ...locationsData.towns,
          ];
          setAllLocations(combinedLocations);
          // Store locations data in local storage
          localStorage.setItem(
            "allLocations",
            JSON.stringify(combinedLocations)
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter locations locally based on the search term
  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = allLocations.filter((location) =>
        location.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLocations(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredLocations([]);
      setShowSuggestions(false);
    }
  }, [searchTerm, allLocations]);

  // Handle form submission
  const handleSearch = (data) => {
    const {
      location,
      offer,
      category,
      subCategory,
      minPrice,
      maxPrice,
      minBeds,
      maxBeds,
      baths,
    } = data;

    let query = `/search?location=${location}&offer=${offer}&category=${category}`;

    if (minPrice) query += `&minPrice=${minPrice}`;
    if (maxPrice) query += `&maxPrice=${maxPrice}`;
    if (minBeds) query += `&minBeds=${minBeds}`;
    if (maxBeds) query += `&maxBeds=${maxBeds}`;
    if (baths) query += `&baths=${baths}`;
    if (subCategory) query += `&subCategory=${subCategory}`;

    router.push(query);
    reset();
  };
  const toggleMoreFilters = () => setShowMoreFilters(!showMoreFilters);

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setValue("location", suggestion.title);
    setSearchTerm(suggestion.title);
    setShowSuggestions(false);
  };

  // Close suggestions on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionBoxRef.current &&
        !suggestionBoxRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [suggestionBoxRef]);

  return (
    <div className="p-4 bg-white/30 rounded shadow-lg relative">
      <form
        className="space-y-4 max-w-6xl mx-auto"
        onSubmit={handleSubmit(handleSearch)}
      >
        <div className="flex flex-col md:flex-row text-gray-900 space-y-4 md:space-y-0 md:space-x-4 items-stretch w-full">
  {/* Location Input */}
  <div className="flex-1 flex items-center space-x-2 relative w-full text-gray-900">
    <input
      {...register("location")}
      type="text"
      placeholder="Type City or Town"
      className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      onChange={(e) => setSearchTerm(e.target.value)}
      value={searchTerm}
      autoComplete="off"
      required
    />
    {showSuggestions && (
      <ul
        ref={suggestionBoxRef}
        className="absolute top-full left-0 w-full bg-white text-gray-900 border rounded-lg shadow-lg mt-2 max-h-60 overflow-y-auto z-10"
      >
        {filteredLocations.map((location) => (
          <li
            key={location.id}
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSuggestionClick(location)}
          >
            {location.title}
          </li>
        ))}
      </ul>
    )}
  </div>
  {/* Offer Type */}
  <div className="flex-1 w-full">
    <select
      {...register("offer")}
      className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      
    >
      <option value="">Property Type</option>
      <option value="SALE">For Sale</option>
      <option value="RENT">For Rent</option>
    </select>
  </div>
  {/* Category */}
  <div className="flex-1 w-full">
    <select
      {...register("category")}
      className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      <option value="">Category</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.title}
        </option>
      ))}
    </select>
  </div>
 {/* Toggle More Filters */}
 <button
    type="button"
    onClick={toggleMoreFilters}
    className="flex-1 md:flex-initial flex items-center justify-center px-4 py-4 md:py-3 border rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 w-full md:w-auto"
  >
    <Sliders className="w-5 h-5 mr-2" /> Filters
  </button>

  {/* Submit Button */}
  <button
    type="submit"
    className="flex-1 md:flex-initial flex items-center justify-center px-4 py-4 md:py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 w-full md:w-auto"
  >
    <Search className="w-5 h-5 mr-2" /> Search
  </button>
</div>


        {/* More Filters */}
        {showMoreFilters && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-gray-900">
            {/* Minimum Beds */}
            <div>
              <p className="mb-2 text-gray-300 font-bold">Choose Minimum Beds</p>
              <select
                {...register("minBeds")}
                className="w-full p-2 border rounded"
              >
                <option value="">No Min Beds</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                  <option key={value} value={value}>
                    {value} Beds
                  </option>
                ))}
              </select>
            </div>

            {/* Maximum Beds */}
            <div>
              <p className="mb-2 text-gray-300 font-bold">Choose Maximum Beds</p>
              <select
                {...register("maxBeds")}
                className="w-full p-2 border rounded"
              >
                <option value="">No Max Beds</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                  <option key={value} value={value}>
                    {value} Beds
                  </option>
                ))}
              </select>
            </div>

            {/* Minimum Price */}
            <div>
              <p className="mb-2 text-gray-300 font-bold">Choose Minimum Price</p>
              <select
                {...register("minPrice")}
                className="w-full p-2 border rounded"
              >
                <option value="">No Min Price</option>{" "}
                {/* Add default option */}
                {[
                  100, 250, 500, 800, 1000, 1200, 1500, 5000, 10000, 20000,
                  30000, 40000, 50000, 80000, 100000, 200000, 500000,
                ].map((value) => (
                  <option key={value} value={value}>
                    ${value}
                  </option>
                ))}
              </select>
            </div>

            {/* Maximum Price */}
            <div>
              <p className="mb-2 text-gray-300 font-bold">Choose Maximum Price</p>
              <select
                {...register("maxPrice")}
                className="w-full p-2 border rounded"
              >
                <option value="">Choose Max Price</option>{" "}
                {/* Add default option */}
                {[
                  100, 250, 500, 800, 1000, 1200, 1500, 5000, 10000, 20000,
                  30000, 40000, 50000, 80000, 100000, 200000, 500000,
                ].map((value) => (
                  <option key={value} value={value}>
                    ${value}
                  </option>
                ))}
              </select>
            </div>

            {/* Baths */}
            <div>
              <p className="mb-2 text-gray-300 font-bold">Baths</p>
              <select
                {...register("baths")}
                className="w-full p-2 border rounded"
              >
                <option value="">Choose Baths</option>{" "}
                {/* Add default option */}
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>
                    {value} Baths
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
