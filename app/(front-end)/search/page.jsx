'use client';

import React, { useEffect, useState } from "react";
import FilterComponent from "@/components/frontend/filter/FilterComponent";
import { getData } from "@/lib/getData";

export default function Search({ searchParams }) {
  // State to store properties, companies, total count, and towns
  const [properties, setProperties] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [filteredTowns, setFilteredTowns] = useState([]);

  // Destructure search and filter parameters from the query
  const {
    sort = "createdAt_desc",
    page = 1,
    limit = 16,
    location = "",
    offer = "",
    type = "",
    minPrice = "",
    maxPrice = "",
    minBeds = "",
    maxBeds = "",
    baths = "",
    category = "",
    subCategory = "",
  } = searchParams;

  // Construct the query string with search and filters
  const query = new URLSearchParams({
    sort,
    page,
    limit,
    location,
    offer,
    type,
    minPrice,
    maxPrice,
    minBeds,
    maxBeds,
    baths,
    category,
    subCategory,
  }).toString();

  // Fetch properties and companies data on component mount
  useEffect(() => {
    async function fetchData() {
      // Fetch filtered properties data
      const { properties, totalCount } = await getData(`properties?${query}`);
      setProperties(properties);
      setTotalCount(totalCount);

      // Fetch all locations data
      const allLocations = await getData('locations');

      // Filter for towns based on the current location
      let towns = [];
      const city = allLocations.cities.find((loc) => loc.slug.toLowerCase() === location.toLowerCase());

      if (city) {
        towns = city.towns;
      } else {
        allLocations.cities.forEach((loc) => {
          const town = loc.towns.find((town) => town.slug.toLowerCase() === location.toLowerCase());
          if (town) {
            towns = loc.towns;
          }
        });
      }

      setFilteredTowns(towns);

      // Check if companies data is already stored in local storage
      let cachedCompanies = JSON.parse(localStorage.getItem("companies"));

      if (!cachedCompanies) {
        // If not, fetch the companies data from the API
        cachedCompanies = await getData(`companies`);
        // Store the fetched companies data in local storage
        localStorage.setItem("companies", JSON.stringify(cachedCompanies));
      }

      // Set companies state
      setCompanies(cachedCompanies);
    }

    fetchData();
  }, [query, location]); // Dependency array includes query and location to re-fetch data when search params change

  const categoryObj = {
    title: location || "Search Results",
    slug: "",
    isSearch: true,
    properties,
  };

  return (
    <div>
      {properties && companies && (
        <div>
          <FilterComponent
            category={categoryObj}
            companies={companies}
            similarLocations={filteredTowns} 
            properties={properties}
          />
        </div>
      )}
    </div>
  );
}
